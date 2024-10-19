import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import searchSlice  from "@/redux/slices/searchSlice" // Sizning search slice yo'lingiz
import productStatsSlice from "./slices/productStatsSlice";
import userStatsSlice from "./slices/userStatsSlice";
import langSlice from "./slices/langSlice";
import darkSlice from "./slices/darkSlice";
// import themeSlice from "./slices/themaSlice";
// import localStorage from "redux-persist/es/storage";

// const config = {
//   key:"root",
//   storage: localStorage,
//   whitelist: ['theme'],
//   blacklist: [],
// }

// Reducerlarni birlashtirish
const rootReducer = combineReducers({
  search: searchSlice,
  productStats: productStatsSlice,
  userStats: userStatsSlice,
  lang: langSlice,
  dark: darkSlice,
  // theme: themeSlice,
  // Boshqa reducerlar qo'shishingiz mumkin
});



// Store yaratish
const store = configureStore({
  reducer: rootReducer,
});

// Turli xususiyatlar uchun tiplar qo'shish
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
