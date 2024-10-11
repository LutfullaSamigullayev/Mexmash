import { Button, Select, Space } from "antd";
import { GlobalOutlined, SunOutlined } from "@ant-design/icons";

export function Header() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="w-full flex justify-end gap-2">
      <Space wrap>
        <Select 
          className="w-fit"
          defaultValue="uz"
          suffixIcon={<GlobalOutlined />}
          onChange={handleChange}
          options={[
            { value: "Uz", label: "uz" },
            { value: "Ru", label: "ru" },
            { value: "En", label: "en" },
          ]}
        />
      </Space>
      <Button>
      <SunOutlined />
      </Button>
      <a href="#" >
        
          <img src="/public/person.png" alt="person" className="w-8 h-8 rounded-full"/>
       
        
      </a>
    </div>
  );
}
