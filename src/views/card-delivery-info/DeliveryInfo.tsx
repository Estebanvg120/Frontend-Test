import { useNavigate } from "react-router-dom";
import { Button, Input, Title } from "../../components";
import LabelSelect from "../../components/LableSelect";
import { Strings } from "../../strings/Strings";
import ButtonBack from "../../layout/components/ButtonBack";


function DeliveryInfo() {

  const navigate = useNavigate();

  const dataselect = [{
    value: 1,
    option: "CC"
  },
  {
    value: 2,
    option: "CE"
  }
  ];
  const cityselect = [{
    value: 1,
    option: "Cali"
  },
  {
    value: 2,
    option: "Medellin"
  },
  {
    value: 3,
    option: "Bogota"
  },
  {
    value: 4,
    option: "Barranquilla"
  }
  ];
  const deparmentselect = [{
    value: 1,
    option: "Valle"
  },
  {
    value: 2,
    option: "Antioquia"
  },
  {
    value: 3,
    option: "Bogota"
  },
  {
    value: 4,
    option: "Atlantico"
  }
  ];
  return (
    <div className="container text-center">

      <div className='row'>
        <div className='col-4'>
          <ButtonBack></ButtonBack>
        </div>
        <div className='col-4 p-3'>
          <Title text={Strings.deliveryinfo}></Title>
        </div>
        <div className='col-4' />
      </div>


      <div className='row'>
        <div className='col-2' />

        <div className='col-8'>
          <div className='row'>
            <div className='col-md-12'>
              <Input type={"text"} text={Strings.nameDelivery}></Input>
            </div>

            <div className='col-md-12'>
              <Input type={"text"} text={Strings.lastnameDelivery}></Input>
            </div>

            <div className='col-md-6'>
              <Input type={"text"} text={Strings.document}></Input>
            </div>

            <div className='col-md-6'>
              <LabelSelect text={Strings.type} data={dataselect}></LabelSelect>
            </div>

            <div className='col-md-12'>
              <Input type={"text"} text={Strings.email} placeholder={Strings.placeholderemail}></Input>
            </div>

            <div className='col-md-12'>
              <Input type={"text"} text={Strings.phone}></Input>
            </div>

            <div className='col-md-6'>
              <LabelSelect text={Strings.city} data={cityselect}></LabelSelect>
            </div>

            <div className='col-md-6'>
              <LabelSelect text={Strings.department} data={deparmentselect}></LabelSelect>
            </div>

            <div className='col-md-6'>
              <Input type={"text"} text={Strings.address}></Input>
            </div>

            <div className='col-md-6'>
              <Input type={"text"} text={Strings.complement}></Input>
            </div>

          </div>
        </div>
        <div className='col-2' />
      </div>

      <Button text={Strings.gopay} action={() => navigate("/summary")} />

    </div>
  )
}

export default DeliveryInfo;