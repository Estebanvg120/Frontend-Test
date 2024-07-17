

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../../store/slices/ProductSlice';
import { LabelInfo, Title } from '../../components';
import { Strings } from '../../strings/Strings';
import LabelSelect from '../../components/LableSelect';
import ButtonBack from '../../layout/components/ButtonBack';

function Product() {

  const navigate = useNavigate();
  const { image, price, stock, title } = useSelector(selectSelectedProduct);

  const handleProductDetail = () => {
    navigate("/card-info")
  }

  return (<div className="container text-center">
    <div className='row'>
      <div className='col-4'>
        <ButtonBack></ButtonBack>
      </div>
      <div className='col-4 p-3'>
        <Title text={Strings.product}></Title>
      </div>
      <div className='col-4' />
    </div>

    <div className="row">
      <div className="col-md-12 p-5">
        <img src={image} className="img-fluid img-thumbnail w-25" alt="..." />
      </div>
      <div className="col" />
      <div className="col-md-6">
        <div className="row">
          <div className="col-6 p-3">
            <LabelInfo title={title} price={price}></LabelInfo>
          </div>
          <div className="col-6 p-3">
            <LabelSelect text={Strings.quantity} stock={stock}></LabelSelect>
          </div>
          <div className="col-6 p-3">
            <LabelInfo title={Strings.available} available={stock}></LabelInfo>
          </div>
        </div>
      </div>
      <div className="col" />

      <Button text={Strings.buy} action={handleProductDetail} stock={stock}></Button>

    </div>

  </div>
  )


}

export default Product;