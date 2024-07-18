import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Strings } from '../../assets/strings/Strings';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedProduct } from '../../store/slices/ProductSlice';
import { LabelInfo, Loader, Title } from '../../components';
import ButtonBack from '../../layout/components/ButtonBack';
import { quantity } from '../../store/slices/QuantitySlice';
import { createTransaction } from '../../interfaces/transaction.interface';
import { selectDataDelivery } from '../../store/slices/DeliverySlice';
import { cardToken } from '../../store/slices/CardSlice';
import { useState } from 'react';
import { createTransactionApi, getTransactionApi } from '../../api/services/Service';
import { setFinalData } from '../../store/slices/FinalDataSlice';


function Summary() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const product = useSelector(selectSelectedProduct);
  const quantityProduct = useSelector(quantity);
  const delivery = useSelector(selectDataDelivery);
  const card = useSelector(cardToken);

  const [isLoading, setIsLoading] = useState(false);

  const priceProduct: number = product?.price ? product.price : 0;
  const subtotal: number = priceProduct * quantityProduct;
  const total: string = (subtotal + parseInt(process.env.BASE_FEE ?? "0") + parseInt(process.env.DELIVERY_FEE ?? "0")).toString();

  const handleSummary = async () => {
    try {
      const dataTransaction: createTransaction = {
        idCustomer: parseInt(process.env.CUSTOMER_ID ?? "0"),
        idProduct: product?.id ?? 0,
        dataTransaction: {
          amount: parseInt(total.padEnd(total.length + 2, "0")),
          description: product?.name ?? "",
          installments: card.installments,
          token: card.cardToken,
          external_id: "",
          quantityProduct: quantityProduct
        },
        dataDelivery: delivery.delivery
      };
      setIsLoading(true);
      const response = await createTransactionApi(dataTransaction);
      if (response.status === 200) {
        const transactionState = async () => {
          const state = await getTransactionApi(response.data.dataTransaction.external_id);
          if (state.data.dataTransaction.state === Strings.pending) {
            setTimeout(() => transactionState(), 1000);
          } else if (state.data.dataTransaction.state === Strings.success || state.data.dataTransaction.state === Strings.declined) {
            dispatch(setFinalData({
              amount: state.data.dataTransaction.amount,
              external_id: state.data.dataTransaction.external_id,
              state: state.data.dataTransaction.state,
              createAt: state.data.dataTransaction.createAt,
              name: state.data.dataTransaction.customer.name,
              lastname: state.data.dataTransaction.customer.lastname,
              documentNumber: state.data.dataTransaction.customer.documentNumber,
              nameDelivery: state.data.dataDelivery.nameDelivery,
              lastnameDelivery: state.data.dataDelivery.lastnameDelivery,
              address: state.data.dataDelivery.address,
              department: state.data.dataDelivery.department,
              city: state.data.dataDelivery.city,
            }));
            setIsLoading(false);
            goToCheckout();
          }
        }
        transactionState();
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  const goToCheckout = () => navigate("/checkout")
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
          <LabelInfo title={Strings.product} text={product?.name} vertical={false}></LabelInfo>
        </div>
        <div className='col'>
          <img src={product?.image} className="img-fluid img-thumbnail w-md-25 col-6" alt="..." />
        </div>
      </div>

      <div className="row">
        <div className="col p-3">
          <LabelInfo title={Strings.quantity} text={quantityProduct.toString()} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.amount} price={product?.price} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.subtotal} price={subtotal} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.basefee} price={parseInt(process.env.BASE_FEE ?? "0")} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row p-2">
        <div className="col">
          <LabelInfo title={Strings.delivery} price={parseInt(process.env.DELIVERY_FEE ?? "0")} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <LabelInfo title={Strings.total} price={parseInt(total)} vertical={true}></LabelInfo>
        </div>
      </div>

      {isLoading ? <Loader></Loader> : <Button text={Strings.pay} action={handleSummary}></Button>}

    </div>


  </>
}
export default Summary;