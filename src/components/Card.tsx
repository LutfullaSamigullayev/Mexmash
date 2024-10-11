import { CardProps } from "@/types";

export function Card({children}: CardProps) {
    return <div className="w-60 h-28 bg-slate-400">{children}
    
    </div>
}