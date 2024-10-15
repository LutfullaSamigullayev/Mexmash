import { CardProps } from "@/types";
import { clsx } from "clsx";


export function Card(data : CardProps) {
    const {children, bg, icon, desc, number} = data
    return <div className={clsx(`bg-[${bg}]`, "w-60 h-28",)}>
        <h1>{children}</h1>
        <svg>{icon}</svg>
        <p>{number}</p>
        <p>{desc}</p>
    </div>
}