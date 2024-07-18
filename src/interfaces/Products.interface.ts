export interface Product {
  id: number,
  image: string,
  name?: string,
  price: number,
  stock: number,
  description?: string
}

export interface dataSelect {
  value: number,
  option: string
}