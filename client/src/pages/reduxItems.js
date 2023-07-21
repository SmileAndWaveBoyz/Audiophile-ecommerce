import { createSlice } from "@reduxjs/toolkit";

export const xx99miiQuantitySlice = createSlice({
  name: "xx99miiQuantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setXx99MiiQuantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const xx99miQuantitySlice = createSlice({
  name: "xx99miQuantity",
  initialState: {
    value: 0,
  },
  reducers: {
    setXx99MiQuantity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setXx99MiiQuantity } = xx99miiQuantitySlice.actions;
export const { setXx99MiQuantity } = xx99miQuantitySlice.actions;
export const selectXx99MiiQuantity = (state) => state.xx99miiQuantity.value;
export const selectXx99MiQuantity = (state) => state.xx99miQuantity.value;

export default {
  xx99miiQuantity: xx99miiQuantitySlice.reducer,
  xx99miQuantity: xx99miQuantitySlice.reducer,
};
