import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { LabelInfo, Title } from '../../components';
import { Strings } from '../../assets/strings/Strings';
import { useSelector } from 'react-redux';
import { selectFinalData } from '../../store/slices/FinalDataSlice';

function FinalStatus() {
  const navigate = useNavigate()
  const finalData = useSelector(selectFinalData);
  return <>
    <div className="container text-center">

      <div className='row'>
        <div className='col-4'>
        </div>
        <div className='col-4 p-3'>
          <Title text={finalData.state === Strings.success ? Strings.trx_success : Strings.trx_declined}></Title>
        </div>
        <div className='col-4' />
      </div>

      <div className="col-md-12 p-5">
        <img src={finalData.state === Strings.success ? Strings.img_success : Strings.img_faild} className="img-fluid img-thumbnail w-25" alt="..." />
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.idtrx} text={finalData.external_id} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <LabelInfo title={Strings.transaction_status} text={finalData.state} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.name_customer} text={`${finalData.name} ${finalData.lastname}`} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.document_Customer} text={finalData.documentNumber} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row p-2">
        <div className="col">
          <LabelInfo title={Strings.name_delivery} text={`${finalData.nameDelivery} ${finalData.lastnameDelivery}`} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.city} text={finalData.city} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.department} text={finalData.department} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row">
        <div className="col p-2">
          <LabelInfo title={Strings.address} text={finalData.address} vertical={true}></LabelInfo>
        </div>
      </div>

      <div className="row p-2">
        <div className="col">
          <LabelInfo title={Strings.total} price={finalData.amount} vertical={true}></LabelInfo>
        </div>
      </div>


      <Button text={Strings.returnStore} action={() => navigate("/")}></Button>
    </div>
  </>
}

export default FinalStatus;