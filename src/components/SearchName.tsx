import { Input } from "antd";
const { Search } = Input;
import { setSearch } from "@/redux/slices/searchSlice"; // O'zgaruvchi yo'lini moslashtiring
import { Dispatch } from "redux"; // Redux dispatch uchun
import { useDispatch } from "react-redux"; // Redux dispatch uchun hook

export function SearchName() {

  const dispatch: Dispatch = useDispatch(); // Redux dispatch


  const onSearch = (value: string) => {
    dispatch(setSearch(value));
  };
    return(
        <div>
            <Search
        placeholder="Izlash..."
        allowClear
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
        }}
        onSearch={onSearch}
        style={{
          width: 400,
        }}
      />
        </div>
    )
}