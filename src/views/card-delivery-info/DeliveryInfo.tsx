import { useNavigate } from "react-router-dom";
import { Button, Input, Title } from "../../components";
import LabelSelect from "../../components/LableSelect";
import { Strings } from "../../assets/strings/Strings";
import ButtonBack from "../../layout/components/ButtonBack";
import { cities, deparmentselect, documentType } from "../../assets/constants/Constants";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setDelivery } from "../../store/slices/DeliverySlice";


function DeliveryInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nameDelivery: "",
    lastnameDelivery: "",
    document: "",
    documentType: "",
    email: "",
    phone: "",
    city: "",
    department: "",
    address: "",
    complement: "",
  })

  const handleDelivery = async () => {
    try {
      dispatch(setDelivery(formData));
      goToSummary();
    } catch (error) {
      console.log(error);
    }
  }
  const goToSummary = () => navigate("/summary")

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
              <Input type={"text"} text={Strings.nameDelivery} onChange={(val: string) => setFormData({ ...formData, nameDelivery: val })}></Input>
            </div>

            <div className='col-md-12'>
              <Input type={"text"} text={Strings.lastnameDelivery} onChange={(val: string) => setFormData({ ...formData, lastnameDelivery: val })}></Input>
            </div>

            <div className='col-md-6'>
              <Input type={"text"} text={Strings.document} onChange={(val: string) => setFormData({ ...formData, document: val })}></Input>
            </div>

            <div className='col-md-6'>
              <LabelSelect text={Strings.type} data={documentType} onChange={(val: string) => setFormData({ ...formData, documentType: val })}></LabelSelect>
            </div>

            <div className='col-md-12'>
              <Input type={"text"} text={Strings.email} placeholder={Strings.placeholderemail} onChange={(val: string) => setFormData({ ...formData, email: val })}></Input>
            </div>

            <div className='col-md-12'>
              <Input type={"text"} text={Strings.phone} onChange={(val: string) => setFormData({ ...formData, phone: val })}></Input>
            </div>

            <div className='col-md-6'>
              <LabelSelect text={Strings.city} data={cities} onChange={(val: string) => setFormData({ ...formData, city: val })}></LabelSelect>
            </div>

            <div className='col-md-6'>
              <LabelSelect text={Strings.department} data={deparmentselect} onChange={(val: string) => setFormData({ ...formData, department: val })}></LabelSelect>
            </div>

            <div className='col-md-6'>
              <Input type={"text"} text={Strings.address} onChange={(val: string) => setFormData({ ...formData, address: val })}></Input>
            </div>

            <div className='col-md-6'>
              <Input type={"text"} text={Strings.complement} onChange={(val: string) => setFormData({ ...formData, complement: val })}></Input>
            </div>

          </div>
        </div>
        <div className='col-2' />
      </div>

      <Button text={Strings.summary} action={handleDelivery} />

    </div>
  )
}

export default DeliveryInfo;