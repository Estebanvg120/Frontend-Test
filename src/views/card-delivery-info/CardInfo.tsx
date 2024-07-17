import { } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import { Strings } from '../../strings/Strings';
import { Title } from '../../components';
import ButtonBack from '../../layout/components/ButtonBack';

function CardInfo() {

  const navigate = useNavigate()

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
              <Input type={"text"} text={Strings.creditNumber}></Input>
            </div>

            <div className='col-12'>
              <Input type={"text"} text={Strings.holderName}></Input>
            </div>

            <div className='col-12 col-md-6'>
              <Input type={"text"} text={Strings.expiry}></Input>
            </div>

            <div className='col-12 col-md-6'>
              <Input type={"password"} text={Strings.cvv}></Input>
            </div>

          </div>
        </div>
        <div className='col-md-4' />
        <Button text={Strings.gopay} action={() => navigate("/summary")}></Button>
      </div>



    </div >
  );
}

export default CardInfo;