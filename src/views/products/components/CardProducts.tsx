import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { Product } from "../../../interfaces/Products.interface";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../../store/slices/ProductSlice";
import { LabelInfo } from "../../../components";
import { Strings } from "../../../assets/strings/Strings";


type Props = {
  product: Product
}

function CardProducts(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = props;
  const handleButton = (element: Product) => {
    dispatch(selectProduct(element));
    navigate("/product")
  }
  return (
    <div key={product.id} className="col-6 col-md-4 p-3" >
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <LabelInfo title={product.name ?? ""} price={product.price}></LabelInfo>
        <Button text={Strings.buy} action={() => handleButton(product)}></Button>
      </div>
    </div>
  );
}

export default CardProducts;