import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Modal,
  Table,
  InputNumber,
} from "antd";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Axios } from "@/lib/axios";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateUserStats } from "@/redux/slices/userStatsSlice";
import { UserType } from "@/types";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { SearchName } from "@/components/SearchName";
import { useTranslation } from "react-i18next";

export const Users: React.FC = () => {
  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);


  const columns: TableProps<UserType>["columns"] = [
    {
      title: "№",
      key: "id",
      render: (_, __, index) => index + 1,
    },
    {
      title: t("User_name"),
      dataIndex: "username",
      key: "username",
    },
    {
      title: t("Phone_number"),
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: t("Action"),
      key: "action",
      render: (item) => (
        <>
          <Button
            className="mx-1 rounded-full"
            onClick={() => {
              showModal();
              setEditUser(item.id);
              setIsModalOpen(true);
              setValue("username", item.username);
              setValue("phone", item.phone);
            }}
          >
            <EditOutlined />
          </Button>
          <Button
            className="mx-1 rounded-full"
            onClick={() => setDeleteUser(item.id)}
          >
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];

 

  // const theme = localStorage.getItem('theme')

  const dispatch = useDispatch();
  const [users, setUsers] = useState<UserType[]>([]);

  const [deleteUser, setDeleteUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleSubmit, control, reset, setValue } = useForm();

  const search: string | null = useSelector(
    (state: RootState) => state.search.query
  );
  const access_token = localStorage.getItem("access_token");

  const showModal = () => {
    reset();
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
    setEditUser(null);
  };

  async function getUsers() {
    try {
      const response = await Axios.get(`/api/v1/user`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const data: UserType[] = response.data.data.data.map(
        (item: UserType) => ({
          ...item,
          key: item.id, // `key` maydonini qo'shamiz
        })
      ); // Adjust based on your actual data structure
      setUsers(data);
      dispatch(updateUserStats(data.length)); // Dispatching the user count
    } catch (error: any) {
      console.error("An error occurred while fetching user data:", error);
    }
  }

  const onsubmit = async (data: FieldValues) => {
    console.log(data);
    if (editUser) {
      try {
        const response = await Axios.patch(`/api/v1/user/${editUser}`, data, {
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
    setEditUser(null);
    getUsers();
  };

  const onDeleteUser = async () => {
    try {
      await Axios.delete(`/api/v1/product/${deleteUser}`, {
        headers: {
          Authorization: `Bearer ${access_token}`, // O'zingizning tokeningizni qo'shing
        },
      });
      console.log("Product deleted successfully");
      getUsers();
    } catch (err) {
      console.error(err);
    }
    reset();
    setDeleteUser(null);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filteredUsers = users.filter((item) => {
    return search === null || search === ""
      ? true
      : item.username.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-3">
      <div className="flex justify-between p-2 pb-4 ">
        <h2 className="font-bold basis-1/3">{t("List_of_users")}</h2>
        <SearchName />
        <div className="basis-1/3"></div>
      </div>

      <ConfigProvider
        theme={{
          token: {
            // colorBgContainer: '#454343',
            // colorText: '#fff',
          },
        }}
      >
        <Table<UserType> columns={columns} dataSource={filteredUsers} />
      </ConfigProvider>

      <Modal
        title={t("Editing")}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form className="w-96" onFinish={handleSubmit(onsubmit)}>
          <Controller
            control={control}
            name="username"
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
            name="phone"
            render={({ field }) => (
              <InputNumber<number>
                // type="number"
                className="w-96"
                placeholder="Telefon raqamini kiriting"
                {...field}
              />
            )}
          />
          <Button htmlType="submit" type="primary">
          {t("Editing")}
          </Button>
        </Form>
      </Modal>
      <Modal
        width={200}
        centered={true}
        open={deleteUser !== null}
        okText={t("Yes")}
        cancelText={t("No")}
        onOk={onDeleteUser}
        onCancel={() => {
          setDeleteUser(null);
        }}
      >
        {t("Delete")}?
      </Modal>
    </div>
  );
};
