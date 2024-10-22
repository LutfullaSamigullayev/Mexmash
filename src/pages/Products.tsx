import { Button, Form, Input, InputNumber, Modal, Table } from "antd";
import type { TableProps } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Axios } from "@/lib/axios";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { DataType } from "@/types";
import { updateProductStats } from "@/redux/slices/productStatsSlice";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { SearchName } from "@/components/SearchName";
import { useTranslation } from "react-i18next";

export const Products: React.FC = () => {
  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const dispatch = useDispatch();
  const [products, setProducts] = useState<DataType[]>([]);
  const [editProduct, setEditProduct] = useState<number | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleSubmit, control, reset, setValue } = useForm();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "№",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: t("Name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("Price"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: t("Real") + " " + t("Price"),
      dataIndex: "realPrice",
      key: "realPrice",
    },
    {
      title: t("Image"),
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (text: string) => <img src={text} alt={text} className="w-10" />,
    },
    {
      title: t("Action"),
      key: "action",
      render: (item) => (
        <>
          <Button
            className="mx-1 rounded-full"
            // type="primary"
            onClick={() => {
              setEditProduct(item.id);
              setIsModalOpen(true);
              setValue("name", item.name);
              setValue("price", item.price);
              setValue("realPrice", item.realPrice);
              setValue("imageUrl", item.imageUrl);
            }}
          >
            <EditOutlined />
          </Button>
          <Button
            className="mx-1 rounded-full"
            // type="primary"
            onClick={() => setDeleteProduct(item.id)}
          >
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

  const access_token = localStorage.getItem("access_token");

  const showModal = () => {
    reset();
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
    setEditProduct(null);
  };

  let search: string | null = useSelector(
    (state: RootState) => state.search.query
  );

  async function getProducts() {
    try {
      const response = await Axios.get(`/api/v1/product`);
      const data: DataType[] = response.data.data.data.map(
        (item: DataType) => ({
          ...item,
          key: item.id,
        })
      );
      setProducts(data);
      dispatch(updateProductStats(data));
    } catch (error: any) {
      console.error("An error occurred while fetching user data:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    return search === null || search === ""
      ? true
      : item.name.toLowerCase().includes(search.toLowerCase());
  });

  const onsubmit = async (data: FieldValues) => {
    console.log(data);
    if (editProduct) {
      try {
        const response = await Axios.patch(
          `/api/v1/product/${editProduct}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${access_token}`, // O'zingizning tokeningizni qo'shing
            },
          }
        );
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        const response = await Axios.post("/api/v1/product", data, {
          headers: {
            Authorization: `Bearer ${access_token}`, // O'zingizning tokeningizni qo'shing
          },
        });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    reset();
    handleCancel();
    setEditProduct(null);
    getProducts();
  };

  const onDeleteProduct = async () => {
    try {
      await Axios.delete(`/api/v1/product/${deleteProduct}`, {
        headers: {
          Authorization: `Bearer ${access_token}`, // O'zingizning tokeningizni qo'shing
        },
      });
      console.log("Product deleted successfully");
      getProducts();
    } catch (err) {
      console.error(err);
    }
    reset();
    setDeleteProduct(null);
  };

  return (
    <div className="p-3 ">
      <div className="flex p-2 justify-between">
        <h2 className="font-bold">{t("List_of_products")}</h2>
        <SearchName />
        <div className="">
        <Button className="rounded-full" onClick={showModal}>
          {t("Add_product")}
          <PlusCircleOutlined />
        </Button>

        </div>
      </div>
      <Table<DataType> columns={columns} dataSource={filteredProducts} />
      <Modal
        title={editProduct ? t("Editing") : t("Add_product")}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form className="w-96" onFinish={handleSubmit(onsubmit)}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                className="w-96"
                placeholder={t("Enter_the_name")}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <InputNumber<number>
                className="w-96"
                type="number"
                placeholder={t("Enter_the_price")}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="realPrice"
            render={({ field }) => (
              <InputNumber<number>
                className="w-96"
                placeholder={t("Enter_the_real_price")}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="imageUrl"
            render={({ field }) => (
              <Input
                className="w-96"
                placeholder={t("Enter_the_image_URL")}
                {...field}
              />
            )}
          />
          <Button htmlType="submit" type="primary">
            {editProduct ? t("Editing") : t("Add_product")}
          </Button>
        </Form>
      </Modal>
      <Modal
        width={200}
        centered={true}
        open={deleteProduct !== null}
        okText={t("Yes")}
        cancelText={t("No")}
        onOk={onDeleteProduct}
        onCancel={() => {
          setDeleteProduct(null);
        }}
      >
        {t("Delete")}?
      </Modal>
    </div>
  );
};
