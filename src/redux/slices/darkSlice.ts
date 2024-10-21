import { ThemeState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface DarkState {
//     isDarkMode: boolean; // Hozirgi til (default: 'uz')
//   }

const initialState: ThemeState = {
  isDarkMode: "light",
};

const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleDarkMode(state, action: PayloadAction<"light" | "dark">) {
      state.isDarkMode = action.payload;
    },
  },
});

// Export the action
export const { toggleDarkMode } = darkSlice.actions;

// Export the reducer
export default darkSlice.reducer;
