import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface FinalData {
  amount: number;
  external_id: string;
  state: string;
  createAt: string;
  name: string;
  lastname: string;
  documentNumber: string;
  nameDelivery: string;
  lastnameDelivery: string;
  address: string;
  department: string;
  city: string;
}

interface InitialFinalData {
  finalData: FinalData;
}

const initialState: InitialFinalData = {
  finalData: {
    amount: 0,
    external_id: "",
    state: "",
    createAt: "",
    name: "",
    lastname: "",
    documentNumber: "",
    nameDelivery: "",
    lastnameDelivery: "",
    address: "",
    department: "",
    city: "",
  },
};

const finaldataSlice = createSlice({
  name: "finaldata",
  initialState,
  reducers: {
    setFinalData(state, action) {
      state.finalData = action.payload;
    },
    clearFinalData(state) {
      state.finalData = {
        amount: 0,
        external_id: "",
        state: "",
        createAt: "",
        name: "",
        lastname: "",
        documentNumber: "",
        nameDelivery: "",
        lastnameDelivery: "",
        address: "",
        department: "",
        city: "",
      }
    },
  },
});

// Actions
export const { setFinalData } = finaldataSlice.actions;

//Data Selector
export const selectFinalData = (state: RootState) => state.finaldata.finalData;

export default finaldataSlice.reducer;
