import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface InitialQuantity { quantity: number; }

const initialState: InitialQuantity = {
  quantity: 0,
};

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    setQuantity(state, action) {
      state.quantity = action.payload;
    },
    clearToken(state) {
      state.quantity = 0
    },
  },

});

// Actions
export const { setQuantity } = quantitySlice.actions;

//Data Selector
export const quantity = (state: RootState) => state.quantity.quantity;
export default quantitySlice.reducer;

