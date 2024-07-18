

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedProduct } from '../../store/slices/ProductSlice';
import { LabelInfo, Title } from '../../components';
import { Strings } from '../../assets/strings/Strings';
import LabelSelect from '../../components/LableSelect';
import ButtonBack from '../../layout/components/ButtonBack';
import { useState } from 'react';
import { setQuantity } from '../../store/slices/QuantitySlice';

function Product() {

  const dispatch = useDispatch();
  const [quantityProduct, setQuantityProduct] = useState(0);

  const navigate = useNavigate();
  const productSelected = useSelector(selectSelectedProduct);

  const handleProductDetail = () => {
    dispatch(setQuantity(quantityProduct));
    navigate("/card-info")
  }

  return (<div className="container text-center">
    <div className='row'>
      <div className='col-4'>
        <ButtonBack />
      </div>
      <div className='col-4 p-3'>
        <Title text={Strings.product}></Title>
      </div>
      <div className='col-4' />
    </div>

    <div className="row">
      <div className="col-md-12 p-5">
        <img src={productSelected?.image} className="img-fluid img-thumbnail w-25" alt="..." />
      </div>
      <div className="col" />
      <div className="col-md-6">
        <div className="row">
          <div className="col-6 p-3">
            <LabelInfo title={productSelected?.name ?? ""} price={productSelected?.price}></LabelInfo>
          </div>
          <div className="col-6 p-3">
            <LabelSelect text={Strings.quantity} stock={productSelected?.stock} onChange={(val: string) => setQuantityProduct(parseInt(val))}></LabelSelect>
          </div>
          <div className="col-6 p-3">
            <LabelInfo title={Strings.available} available={productSelected?.stock}></LabelInfo>
          </div>
        </div>
      </div>
      <div className="col" />

      <Button text={Strings.buy} action={handleProductDetail} stock={productSelected?.stock}></Button>

    </div>

  </div>
  )


}

export default Product;