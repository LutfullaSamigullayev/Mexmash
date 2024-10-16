import { ComponentProps } from "react";

export interface TRoute {
  id: number;
  path: string;
  element: React.ReactNode;
  children?: TRoute[];
}

export interface TRoutes {
  public: TRoute[];
  private: TRoute[];
}

export type IconProps = ComponentProps<"svg">;

export type CardProps = {
  id: number;
  name: string;
  bg: string;
  count: number | null;
  desc: string;
  icon: React.ReactNode;
};

export type User = {
  access_token: string;
  refresh_token: string;
};

export type TProducts = CardProps;

export interface DataType {
  id: number;
  key: number;
  name: string;
  price: number;
  realPrice: number;
  imageUrl: string;
}

export interface UserType {
  id: number;
  username: string;
  phone: string;
  verified: boolean;
  verify_code: string;
  telegramID: string;
  refresh_token: string | null;
}


export interface SearchState {
  query: string;
}

export interface ProductStatsState {
  count: number;
  minPrice: number | null;
  totalRealPrice: number;
}

export interface UserStatsState {
  count: number;
}