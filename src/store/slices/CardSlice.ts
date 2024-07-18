import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface dataCard { cardToken: string; installments: number }
interface InitialCard { card: dataCard }

const initialState: InitialCard = {
  card: {
    cardToken: "",
    installments: 0
  }
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setToken(state, action) {
      state.card = action.payload;
    },
    clearToken(state) {
      state.card = {
        cardToken: "",
        installments: 0
      }
    },
  },

});

// Actions
export const { setToken } = cardSlice.actions;

//Data Selector
export const cardToken = (state: RootState) => state.cards.card;
export default cardSlice.reducer;

