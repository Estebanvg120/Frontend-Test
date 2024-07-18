import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAllProducts } from "../../api/services/Service";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  stock: number;
}

interface ErrorState {
  error: string;
  code: string;
}

interface InitialProducts {
  items: Product[];
  selectedProduct: Product | null;
  error: string;
  isFetching: boolean;
  status: string;
}

const initialState: InitialProducts = {
  items: [],
  selectedProduct: null,
  error: "",
  isFetching: true,
  status: "",
};

export const getProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState; rejectValue: ErrorState }
>("products/getProducts", async (_, { rejectWithValue }) => {
  try {
    const products = await getAllProducts(10, 1);
    return products.data;
  } catch (error: unknown) {
    const errorMessage =
      (error as Error).message || "An unexpected error occurred";
    return rejectWithValue({ error: errorMessage, code: "0" });
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = {
        id: 0,
        image: "",
        name: "",
        price: 0,
        stock: 0,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        return {
          ...state,
          error: "",
          isFetching: true,
          status: "FETCHING",
        };
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        console.log("action", action);
        return {
          ...state,
          items: action.payload,
          error: "",
          isFetching: false,
          status: "SUCCESS",
        };
      })
      .addCase(getProducts.rejected, (state, action) => {
        const { error } = action.payload as { error: string; code: string };
        return {
          ...state,
          error,
          isFetching: false,
          status: "ERROR",
        };
      });
  },
});

// Actions
export const { selectProduct, clearSelectedProduct } = productsSlice.actions;

//Data Selector
export const selectAllProducts = (state: RootState) => state.products.items;
export const selectSelectedProduct = (state: RootState) =>
  state.products.selectedProduct;

export const productsState = (state: RootState) => state.products;

export default productsSlice.reducer;

export type { Product, InitialProducts };
