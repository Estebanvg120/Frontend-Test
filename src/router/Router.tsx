import { Routes, Route } from "react-router-dom";
import { ProductLayout } from "../layout";
import { CardInfo, DeliveryInfo, FInalStatus, Product, Products, Summary } from "../views";

function Router() {
  return (
    <Routes>
      <Route path='/' element={<ProductLayout />}>
        <Route index element={<Products />} />
        <Route path='product' element={<Product />} />
        <Route path='card-info' element={<CardInfo />} />
        <Route path='delivery-info' element={<DeliveryInfo />} />
        <Route path='summary' element={<Summary />} />
        <Route path='checkout' element={<FInalStatus />} />
      </Route>
    </Routes>
  );
}
export default Router;