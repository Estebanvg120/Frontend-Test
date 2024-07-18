import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAllProducts } from "../../api/services/Service";

interface Delivery {
  name: string;
  lastname: string;
  documentNumber: string;
  documentType: string;
  email: string;
  phone: string;
  city: string;
  department: string;
  address: string;
  complement: string;
}

interface initialDelivery {
  delivery: Delivery;
}

const initialState: initialDelivery = {
  delivery: {
    name: "",
    lastname: "",
    documentNumber: "",
    documentType: "",
    email: "",
    phone: "",
    city: "",
    department: "",
    address: "",
    complement: "",
  },
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    setDelivery(state, action) {
      state.delivery = action.payload;
    },
    clearSelectedProduct(state) {
      state.delivery = {
        name: "",
        lastname: "",
        documentNumber: "",
        documentType: "",
        email: "",
        phone: "",
        city: "",
        department: "",
        address: "",
        complement: "",
      }
    },
  },
});

// Actions
export const { setDelivery } = deliverySlice.actions;

//Data Selector
export const selectDataDelivery = (state: RootState) => state.delivery;

export default deliverySlice.reducer;
