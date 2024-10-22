import { Input } from "antd";
const { Search } = Input;
import { setSearch } from "@/redux/slices/searchSlice"; // O'zgaruvchi yo'lini moslashtiring
import { Dispatch } from "redux"; // Redux dispatch uchun
import { useDispatch, useSelector } from "react-redux"; // Redux dispatch uchun hook
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function SearchName() {

  const dispatch: Dispatch = useDispatch(); // Redux dispatch

  const lang = useSelector(
    (state: { lang: { lang: string } }) => state.lang.lang
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const onSearch = (value: string) => {
    dispatch(setSearch(value));
  };
    return(
        <div className="w-60">
            <Search
        placeholder={`${t("Search")}...`}
        allowClear
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
        }}
        onSearch={onSearch}
        // style={{
        //   width: 400,
        // }}
      />
        </div>
    )
}