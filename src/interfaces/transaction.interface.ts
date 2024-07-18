export interface createTransaction {
  idCustomer: number;
  idProduct: number;
  dataTransaction: DataTransaction;
  dataDelivery: DataDelivery;
}

export interface DataDelivery {
  department: string;
  city: string;
  complement: string;
  name: string;
  lastname: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  email: string;
  address: string;
}

export interface DataTransaction {
  amount: number;
  description: string;
  installments: number;
  token: string;
  external_id: string;
  quantityProduct: number;
}