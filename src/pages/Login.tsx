import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { AxiosResponse } from 'axios';
// import { User} from '@/types';
import { useNavigate } from "react-router-dom";
import { Axios } from "@/lib/axios";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export function Login() {
  type LoginValues = {
    login: string;
    password: string;
  };
  const dispatch: Dispatch = useDispatch(); // Redux dispatch

  const navigate = useNavigate();

  const onFinish = async (values: LoginValues) => {
    try {
      const userpost = await Axios.post(`/api/v1/admin/login`, {
        username: values.login,
        password: values.password,
      });
      const data = userpost.data;

      localStorage.setItem("refresh_token", data.data.refresh_token);
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem('theme', 'light')


      navigate("/");
    } catch (error: any) {
      console.error("An error occurred while fetching user data:", error);
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full h-full flex justify-center mt-40">
      <div className="w-fit h-fit flex flex-col gap-y-7">
        {/* <Logo /> */}
        <div className="flex flex-col gap-y-3 items-center">
          <h1 className="text-3xl font-semibold">Kirish</h1>
          <p className="text-sm text-gray-400">
            Kirish uchun login va parolni kiriting!
          </p>
        </div>

        <Form
          name="normal_login"
          className="w-[436px]"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: "Iltimos Loginingizni kiriting!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Login"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Iltimos parolingizni kiriting!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Parol"
            />
          </Form.Item>

          <div className="flex items-center justify-end">
            <Button type="primary" htmlType="submit" className="w-fit">
              Kirish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
