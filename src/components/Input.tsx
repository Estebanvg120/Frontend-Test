import { ChangeEvent } from "react";

type Props = {
  type: string,
  text: string,
  placeholder?: string,
  onChange?: (value: string) => void,
  isExpired?: boolean,
  isCvv?: boolean,
};

function Input(props: Props) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (props.isExpired) {
      if (/^\d{0,2}\/?\d{0,2}$/.test(value)) {
        props.onChange && props.onChange(value);
      }
    } else {
      props.onChange && props.onChange(value);
    }
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default" style={{ height: "100%" }}>{props.text}</span>
      {props.isExpired ? <input placeholder="MM/AA" type={props.type} onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" maxLength={5} required />
        : props.isCvv ? <input type={props.type} onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={props.placeholder} maxLength={3} required />
          : <input type={props.type} onChange={handleChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={props.placeholder} required />
      }
    </div>
  )
}

export default Input;