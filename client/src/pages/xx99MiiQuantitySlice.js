import { createSlice } from "@reduxjs/toolkit";

export const xx99miiQuantitySlice = createSlice({
  name: "xx99miiQuantity",
  initialState: {
    value: 0
  },
  reducers: {
    setXx99MiiQuantity: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setXx99MiiQuantity } = xx99miiQuantitySlice.actions;

export const selectXx99MiiQuantity = (state) => state.xx99miiQuantity.value;

export default xx99miiQuantitySlice.reducer;
