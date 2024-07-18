import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productsState,
  selectAllProducts,
} from "../../store/slices/ProductSlice";
import CardProducts from "./components/CardProducts";
import { Loader, Title } from "../../components";
import { Strings } from "../../assets/strings/Strings";
import { useEffect } from "react";
import { AppDispatch } from "../../store/store";
import { Product } from "../../interfaces/Products.interface";

function Products() {
  const data = useSelector(selectAllProducts);
  console.log(data);
  const { isFetching, status } = useSelector(productsState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (status === "ERROR" && !isFetching) {
      console.log("Cannot load the products now. Please try again later.");
    }
  }, [status]);

  const dataProducts = data.map((element: Product) => (
    <CardProducts product={element}></CardProducts>
  ));
  return (
    <>
      <div className="container text-center p-3">
        <Title text={Strings.products}></Title>
        <div className="row">
          {isFetching ? <Loader></Loader> : dataProducts}
        </div>
      </div>
    </>
  );
}

export default Products;
