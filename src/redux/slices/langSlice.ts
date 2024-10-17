import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Tilning boshlang'ich holati
interface LangState {
  lang: string; // Hozirgi til (default: 'uz')
}

const initialState: LangState = {
  lang: 'uz', // Boshlang'ich til
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang(state, action: PayloadAction<string>) {
      state.lang = action.payload; // Yangi tilni o'rnating
    },
  },
});

// Action va reducerlarni eksport qilish
export const { setLang } = langSlice.actions;
export default langSlice.reducer;
