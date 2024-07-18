import { combineReducers } from "redux";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { CardSlice, ProductSlice, DeliverySlice, QuantitySlice, FinalDataSlice } from "./slices";

combineReducers({
  products: ProductSlice,
  cards: CardSlice
});

const store = configureStore({
  reducer: {
    products: ProductSlice,
    cards: CardSlice,
    delivery: DeliverySlice,
    quantity: QuantitySlice,
    finaldata: FinalDataSlice
  },
});
export default store;

// Obtiene el tipo de dato del estado de cada slice..
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
