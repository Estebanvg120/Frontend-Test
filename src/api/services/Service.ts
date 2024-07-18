import axios from "axios";
import { Card } from "../../interfaces/card.interface";
import { createTransaction } from "../../interfaces/transaction.interface";


const axiosInstance = axios.create({
  baseURL: process.env.URL_BASE,
  timeout: 10000, // tiempo de espera en milisegundos
});

export const getAllProducts = async (take: number, page: number) => {
  try {
    const response = await axiosInstance.get("/products/allProducts", {
      params: { take, page },
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};

export const setCard = async (body: Card) => {
  try {
    const response = await axiosInstance.post(`${process.env.EXTERNAL_API_URL}tokens/cards`,
      body,
      {
        headers: { "Authorization": `Bearer ${process.env.PUBLIC_KEY}` },

      }
    );
    return response.data;
  } catch (error) {
    throw new Error();
  }
}

export const createTransactionApi = async (body: createTransaction) => {
  try {
    const response = await axiosInstance.post("transactions/transaction",
      body,)
    return response.data;
  } catch (error) {
    throw new Error();
  }
}

export const getTransactionApi = async (idTransaction: string) => {
  try {
    const response = await axiosInstance.get(`transactions/transaction/${idTransaction}`)
    return response.data;
  } catch (error) {
    throw new Error();
  }
}