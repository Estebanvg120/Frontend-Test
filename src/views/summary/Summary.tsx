import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Strings } from '../../strings/Strings';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../../store/slices/ProductSlice';
import { LabelInfo, Title } from '../../components';
import ButtonBack from '../../layout/components/ButtonBack';

function Summary() {
  const navigate = useNavigate()

  const { image, title, price } = useSelector(selectSelectedProduct);
  return <>
    <div className="container text-center">
      <div className='row'>
        <div className='col-4'>
          <ButtonBack></ButtonBack>
        </div>
        <div className='col-4 p-3'>
          <Title text={Strings.summary}></Title>
        </div>
        <div className='col-4' />
      </div>



      <div className="row">
        <div className="col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LabelInfo title={Strings.product} text={title} vertical={false}></LabelInfo>
        </div>
        <div className='col'>
          <img src={image} className="img-fluid img-thumbnail w-md-25 col-6" alt="..." />
        </div>
      </div>

      <div className="row">
        <div className="col p-3">
          <LabelInfo title={Strings.quantity} text={"2"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.amount} price={price} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.basefee} price={"7.00"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row p-2">
        <div className="col">
          <LabelInfo title={Strings.delivery} price={"10.00"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.subtotal} price={"24.00"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <LabelInfo title={Strings.total} price={"41.00"} vertical={true}></LabelInfo>
        </div>
      </div>

      <Button text={Strings.pay} action={() => navigate("/checkout")}></Button>

    </div>


  </>
}
export default Summary;