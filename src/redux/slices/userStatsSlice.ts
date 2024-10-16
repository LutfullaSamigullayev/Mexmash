import { UserStatsState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initialState: UserStatsState = {
  count: 0,
};

const userStatsSlice = createSlice({
  name: 'userStats',
  initialState,
  reducers: {
    updateUserStats: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { updateUserStats } = userStatsSlice.actions;
export default userStatsSlice.reducer;
