import { ChangeEvent, useState } from "react";
import { validFormatEmail } from "../assets/functions/Functions";

type Props = {
  type: string,
  text: string,
  placeholder?: string,
  onChange?: (value: string) => void,
  isExpired?: boolean,
  isCvv?: boolean,
  isEmail?: boolean,
};

function Input(props: Props) {
  const [valueInput, setValueInput] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [invalidForm, setInvalidForm] = useState("");
  const [message, setMessage] = useState("");


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (props.isExpired) {
      value = value.replace(/[^\d\/]/g, '');
      if (value.length > 2 && !value.includes('/')) {
        value = `${value.slice(0, 2)}/${value.slice(2)}`;
        setIsInvalid(false);
        setInvalidForm("");
      }
      if (value.length < 3) {
        setIsInvalid(true);
        setInvalidForm("is-invalid");
      }
      setValueInput(value);
      props.onChange && props.onChange(value);
    } else if (props.isEmail) {
      const formatEmail = validFormatEmail(value);
      if (!formatEmail) {
        setIsInvalid(true);
        setInvalidForm("is-invalid");
        setMessage("Please enter a valid email address.");
      } else {
        setIsInvalid(false);
        setInvalidForm("");
        setValueInput(value);
        props.onChange && props.onChange(value);
      }
    }
    else {
      if (value.length > 2) {
        props.onChange && props.onChange(value);
        setIsInvalid(false);
        setInvalidForm("");
      } else {
        setIsInvalid(true);
        setInvalidForm("is-invalid");
        setMessage("Please choose data.");
      }
    }
  }
  return (
    <div className="input-group has-validation mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default" style={{ height: "100%" }}>{props.text}</span>
      {props.isExpired ? <input placeholder="MM/AA" type={props.type} onChange={handleChange} className={`form-control ${invalidForm}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={valueInput} maxLength={5} />
        : props.isCvv ? <input type={props.type} onChange={handleChange} className={`form-control ${invalidForm}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={props.placeholder} maxLength={3} />
          : props.isEmail ? <input type={props.type} onChange={handleChange} className={`form-control ${invalidForm}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={props.placeholder} />
            : <input type={props.type} onChange={handleChange} className={`form-control ${invalidForm}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={props.placeholder} />
      }
      {isInvalid ? <div className="invalid-feedback">
        {message}
      </div> : <></>}
    </div>
  )
}

export default Input;