import { Button, ConfigProvider, Table } from "antd";
import type { TableProps } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Axios } from "@/lib/axios";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateUserStats } from "@/redux/slices/userStatsSlice";
import { UserType } from "@/types";



const columns: TableProps<UserType>["columns"] = [
  {
    title: "№",
    key: "id",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
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

export const Users: React.FC = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState<UserType[]>([]);

  const search: string | null = useSelector(
    (state: RootState) => state.search.query
  );
  const yourToken = localStorage.getItem("access_token")

  async function getUsers() {
    try {
      const response = await Axios.get(`/api/v1/user`, {headers: {
        'Authorization': `Bearer ${yourToken}`
      }});

      const data: UserType[] = response.data.data.data.map(
        (item: UserType) => ({
          ...item,
          key: item.id, // `key` maydonini qo'shamiz
        })) // Adjust based on your actual data structure
      setUsers(data);
      dispatch(updateUserStats(data.length)); // Dispatching the user count
    } catch (error: any) {
      console.error("An error occurred while fetching user data:", error);
    }
  }

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
      <ConfigProvider
      theme={{
        token: {
          // colorBgContainer: '#555', // O'zingiz xohlagan rangni belgilang
        },
      }}
    >
      <Table<UserType> columns={columns} dataSource={filteredUsers}/>
      </ConfigProvider>
    </div>
  );
};
