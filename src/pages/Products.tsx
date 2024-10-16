import { Button, Table } from "antd";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Axios } from "@/lib/axios";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { DataType } from "@/types";
import { updateProductStats } from "@/redux/slices/productStatsSlice";

const columns: TableProps<DataType>["columns"] = [
  {
    title: "№",
    key: "id",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Real Price",
    dataIndex: "realPrice",
    key: "realPrice",
  },
  {
    title: "Image",
    dataIndex: "imageUrl",
    key: "imageUrl",
    render: (text: string) => <img src={text} alt={text} className="w-10" />,
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <>
        <Button>
          <EditOutlined />
        </Button>
        <Button>
          <DeleteOutlined />
        </Button>
      </>
    ),
  },
];

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<DataType[]>([]);

  let search: string | null = useSelector(
    (state: RootState) => state.search.query
  );

  async function getProducts() {
    try {
      const response = await Axios.get(`/api/v1/product`);
      const data: DataType[] = response.data.data.data.map(
        (item: DataType) => ({
          ...item,
          key: item.id, // `key` maydonini qo'shamiz
        })
      );
      setProducts(data);
      dispatch(updateProductStats(data)); // Dispatching the action with fetched products
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

  return (
    <div className="p-3">
      <Table<DataType> columns={columns} dataSource={filteredProducts} />
    </div>
  );
};
