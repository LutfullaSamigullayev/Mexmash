import { ComponentProps, ReactNode } from 'react'

export type IconProps = ComponentProps<"svg">

export type CardProps = {
    id: number;
    children: ReactNode;
    bg: ReactNode;
    number: number;
    desc: string;
    icon: ReactNode;

}

export type User = {
    access_token: string,
    refresh_token: string
  }
  

export type TProducts = CardProps