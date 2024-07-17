import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


const initialState = {
  items: [
    {
      id: 1,
      image: "/foto.png",
      title: "Product 1",
      price: "20.00",
      stock: 3

    }, {
      id: 2,
      image: "/foto.png",
      title: "Product 2",
      price: "10.00",
      stock: 7
    }, {
      id: 3,
      image: "/foto.png",
      title: "Product 3",
      price: "1.00",
      stock: 90
    },
    {
      id: 4,
      image: "/foto.png",
      title: "Product 4",
      price: "20.00",
      stock: 30

    }, {
      id: 5,
      image: "/foto.png",
      title: "Product 5",
      price: "10.00",
      stock: 0
    }, {
      id: 6,
      image: "/foto.png",
      title: "Product 6",
      price: "1.00",
      stock: 36
    }, {
      id: 7,
      image: "/foto.png",
      title: "Product 7",
      price: "10.00",
      stock: 31
    }, {
      id: 8,
      image: "/foto.png",
      title: "Product 8",
      price: "1.00",
      stock: 80
    }
  ],
  selectedProduct: {
    id: 8,
    image: "/foto.png",
    title: "Product 8",
    price: "1.00",
    stock: 80
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct(state) {
      state.selectedProduct =
      {
        id: 8,
        image: "/foto.png",
        title: "Product 8",
        price: "1.00",
        stock: 80
      }
    },
  },
});

// Actions
export const { selectProduct, clearSelectedProduct } = productsSlice.actions;

//Data Selector
export const selectAllProducts = (state: RootState) => state.products.items;
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;

export default productsSlice.reducer;
