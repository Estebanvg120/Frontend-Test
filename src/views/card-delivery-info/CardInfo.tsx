import { useState } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import { Strings } from '../../assets/strings/Strings';
import { Loader, Title } from '../../components';
import ButtonBack from '../../layout/components/ButtonBack';
import LabelSelect from '../../components/LableSelect';
import { installments } from '../../assets/constants/Constants';
import { setCard } from '../../api/services/Service';
import { Card } from '../../interfaces/card.interface';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/slices/CardSlice';
import Alert from '../../components/Alert';

function CardInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    creditNumber: "",
    holderName: "",
    expiry: "",
    cvv: "",
    installments: 0
  });
  const handleCard = async () => {
    try {
      if (
        formData.creditNumber.trim() !== "" &&
        formData.cvv.trim() !== "" &&
        formData.expiry.trim() !== "" &&
        formData.holderName.trim() !== "" &&
        formData.installments !== 0
      ) {
        setIsError(false);
        const body: Card = {
          number: formData.creditNumber,
          cvc: formData.cvv,
          exp_month: formData.expiry.split("/")[0],
          exp_year: formData.expiry.split("/")[1],
          card_holder: formData.holderName
        }
        setIsLoading(true);
        const response = await setCard(body);

        if (response.status === "CREATED") {
          dispatch(setToken({ cardToken: response.data.id, installments: formData.installments }))
          goToDeliveryInfo();
        }
        setIsLoading(false);
      } else {
        setIsError(true);
        setMessage("All fields are mandatory");
      }


    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setMessage("Check the fields you are sending");
      console.error(error);
    }
  }
  const goToDeliveryInfo = () => navigate("/delivery-info")


  return (
    < div className="container text-center" >

      <div className='row'>
        <div className='col-4'>
          <ButtonBack></ButtonBack>
        </div>
        <div className='col-4 p-3'>
          <Title text={Strings.paymethod}></Title>
        </div>
        <div className='col-4' />
      </div>

      <div className='row'>
        <div className="col-md-12 p-5">
          <img src={"/tarjeta.png"} className="img-fluid img-thumbnail w-md-50" alt="..." />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-4' />
        <div className='col'>
          <div className='row'>
            <div className='col-12'>
              <Input type={"number"} text={Strings.creditNumber} onChange={(val: string) => setFormData({ ...formData, creditNumber: val })}></Input>
            </div>

            <div className='col-12'>
              <Input type={"text"} text={Strings.holderName} onChange={(val: string) => setFormData({ ...formData, holderName: val })}></Input>
            </div>

            <div className='col-12 col-md-6'>
              <Input isExpired type={"text"} text={Strings.expiry} onChange={(val: string) => setFormData({ ...formData, expiry: val })}></Input>
            </div>

            <div className='col-12 col-md-6'>
              <Input type={"password"} text={Strings.cvv} onChange={(val: string) => setFormData({ ...formData, cvv: val })} isCvv={true}></Input>
            </div>

            <div className='col-12'>
              <LabelSelect text={'Installments'} data={installments} onChange={(val: string) => setFormData({ ...formData, installments: parseInt(val) })}></LabelSelect>
            </div>

          </div>
        </div>
        <div className='col-md-4' />
        {isError ? <Alert message={message}></Alert> : <></>}
        {isLoading ? <Loader></Loader> : <Button text={Strings.delivery} action={handleCard}></Button>}
      </div>
    </div >
  );
}

export default CardInfo;