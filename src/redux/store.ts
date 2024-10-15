import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import searchSlice  from "@/redux/slices/searchSlice" // Sizning search slice yo'lingiz

// Reducerlarni birlashtirish
const rootReducer = combineReducers({
  search: searchSlice,
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
