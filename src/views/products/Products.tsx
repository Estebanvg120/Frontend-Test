import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/slices/ProductSlice';
import CardProducts from './components/CardProducts';
import { Title } from '../../components';
import { Strings } from '../../strings/Strings';

function Products() {

  const data = useSelector(selectAllProducts);
  const dataProducts = data.map(element =>
    <CardProducts product={element}></CardProducts>
  );
  return <>
    <div className="container text-center p-3">
      <Title text={Strings.products}></Title>
      <div className="row">
        {dataProducts}
      </div>
    </div>
  </>
}

export default Products;