import { ComponentProps, ReactNode } from 'react'

export type IconProps = ComponentProps<"svg">

export type CardProps = {
    children: ReactNode;
    bg: ReactNode;
    number: number;
    desc: string;
    icon: ReactNode;

}