import { CardProps } from "@/types";
import { Card } from "antd";
import clsx from "clsx";

const CardMain = (props: CardProps) => (
  <Card
  key={props.id}
  title={props.name}
  bordered={false}
  className={clsx(`w-72 h-40 text-white ${props.bg}`)}
  >
    <h1 className="text-3xl">{props.count}</h1>
    <p>{props.desc}</p>
    {props.icon}
  </Card>
);

export default CardMain;
