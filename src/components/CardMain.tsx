import { CardProps } from "@/types";
import { Card, ConfigProvider } from "antd";
import clsx from "clsx";

const CardMain = (props: CardProps) => (
  <ConfigProvider
    theme={{
      token: {
        /* here is your global tokens */
        colorText: "#fff",
      },
    }}
  >
    <Card
      key={props.id}
      title={props.name}
      bordered={false}
      className={clsx(`w-72 h-40 ${props.bg}`)}
    >
      <div className="flex h-20 items-center">
        <div className="flex flex-col flex-auto gap-4">
          <h1 className="text-3xl">{props.count}</h1>
          <p>{props.desc}</p>
        </div>
        <div className="w-10">{props.icon}</div>
      </div>
    </Card>
  </ConfigProvider>
);

export default CardMain;
