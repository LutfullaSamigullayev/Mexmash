import CardMain from "@/components/CardMain";
import { RootState } from "@/redux/store";
import { DataType, ProductStatsState, UserStatsState, UserType } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import {
  ContainerOutlined,
  FallOutlined,
  MoneyCollectOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { updateProductStats } from "@/redux/slices/productStatsSlice";
import { Axios } from "@/lib/axios";
import { updateUserStats } from "@/redux/slices/userStatsSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Main() {
  // const lang = useSelector((state) => state.lang)
  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();


  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  async function getProducts() {
    try {
      const response = await Axios.get(`/api/v1/product`);
      const data: DataType[] = response.data.data.data;
      dispatch(updateProductStats(data)); // Dispatching the action with fetched products
    } catch (error: any) {
      console.error("An error occurred while fetching user data:", error);
    }
  }

  const yourToken = localStorage.getItem("access_token");

  async function getUsers() {
    try {
      const response = await Axios.get(`/api/v1/user`, {
        headers: {
          Authorization: `Bearer ${yourToken}`,
        },
      });

      const data: UserType[] = response.data.data.data;
      dispatch(updateUserStats(data.length)); // Dispatching the user count
    } catch (error: any) {
      console.error("An error occurred while fetching user data:", error);
    }
  }

  useEffect(() => {
    getProducts();
    getUsers();
  }, []);

  const productStats = useSelector<RootState, ProductStatsState>(
    (state) => state.productStats
  );
  const userStats = useSelector<RootState, UserStatsState>(
    (state) => state.userStats
  );

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 p-3 text-white transition-all ease-in duration-75">
      <CardMain
        id={1}
        bg={"bg-gradient-to-tr from-purple-900 to-blue-500"}
        name={t("Number_of_products")}
        count={productStats.count}
        desc={t("All_products")}
        icon={<ContainerOutlined />}
      />
      <CardMain
        id={2}
        bg={
          "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        }
        name={t("Starting_price")}
        count={productStats.minPrice}
        desc={t("Starting_price")}
        icon={<FallOutlined />}
      />
      <CardMain
        id={3}
        bg={"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}
        name={t("Total_amount")}
        count={productStats.totalRealPrice}
        desc={t("Total_amount")}
        icon={<MoneyCollectOutlined />}
      />
      <CardMain
        id={4}
        bg={"bg-gradient-to-r from-cyan-500 to-blue-500"}
        name={t("Number_of_users")}
        count={userStats.count}
        desc={t("Number_of_users")}
        icon={<UserOutlined />}
      />
    </div>
  );
}
