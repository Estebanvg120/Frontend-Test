type Props = {
  type: string,
  text: string,
  placeholder?: string,
};

function Input(props: Props) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default" style={{ height: "100%" }}>{props.text}</span>
      <input type={props.type} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder={props.placeholder} />
    </div>
  )
}

export default Input;