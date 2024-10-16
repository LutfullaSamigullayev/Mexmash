import { DataType, ProductStatsState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: ProductStatsState = {
  count: 0,
  minPrice: null,
  totalRealPrice: 0,
};

const productStatsSlice = createSlice({
  name: 'productStats',
  initialState,
  reducers: {
    updateProductStats: (state, action: PayloadAction<DataType[]>) => {
      const products = action.payload;

      state.count = products.length;
      state.minPrice = products.length > 0
        ? Math.min(...products.map(product => product.price))
        : null;
      state.totalRealPrice = products.reduce((sum, product) => sum + product.realPrice, 0);
    },
  },
});

export const { updateProductStats } = productStatsSlice.actions;
export default productStatsSlice.reducer;
