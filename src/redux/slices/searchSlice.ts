import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

// Actions va reducerlarni export qilish
export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
