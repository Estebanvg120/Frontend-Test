import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
// import Products from"./views/products/Products";
// import Product from "./views/product/Product";
// import CardDeliveryInfo from "./views/card-delivery-info/CardDerliveryInfo";
// import Summary from "./views/summary/Summary";
// import FinalStatus from "./views/final-status/FInalStatus";

function App() {
 return (<BrowserRouter><Router/></BrowserRouter>)
  // return <Product></Product>;
  // return <CardDeliveryInfo></CardDeliveryInfo>
  // return <Summary></Summary>
  // return <FinalStatus></FinalStatus>
}

export default App;