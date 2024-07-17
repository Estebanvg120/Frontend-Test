import { configureStore } from '@reduxjs/toolkit';
import { ProductSlice } from './slices';


const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});
export default store;

// Obtiene el tipo de dato del estado de cada slice..
export type RootState = ReturnType<typeof store.getState>;
