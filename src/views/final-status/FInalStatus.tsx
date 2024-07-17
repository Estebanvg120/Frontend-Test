import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { LabelInfo, Title } from '../../components';
import { Strings } from '../../strings/Strings';
import ButtonBack from '../../layout/components/ButtonBack';

function FinalStatus() {
  const navigate = useNavigate()
  return <>
    <div className="container text-center">

      <div className='row'>
        <div className='col-4'>
          <ButtonBack></ButtonBack>
        </div>
        <div className='col-4 p-3'>
          <Title text={"transaction Success"}></Title>
        </div>
        <div className='col-4' />
      </div>

      <div className="col-md-12 p-5">
        <img src={"/foto.png"} className="img-fluid img-thumbnail w-25" alt="..." />
      </div>

      <div className="row">
        <div className="col">
          <LabelInfo title={Strings.ip} text={"198.198.198.198"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.idtrx} text={"bc-12312123"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.total} price={"41.00"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.document} text={"12312312321"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.nameDelivery} text={"Alfonso Medina Mera"} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row p-2">
        <div className="col">
          <LabelInfo title={Strings.datetrx} text={"2024-04-20"} vertical={true}></LabelInfo>
        </div>
      </div>


      <Button text={Strings.returnStore} action={() => navigate("/")}></Button>
    </div>
  </>
}

export default FinalStatus;