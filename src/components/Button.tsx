type Props = {
  text: string,
  stock: number,
  action: () => void,

}

function Button(props: Props) {
  const disabled = props.stock === 0 ? true : false;
  return <div className="col-12 p-3">
    <button type="button" style={{ backgroundColor: "blue" }} className="btn btn-secondary  w-md-50 p-3 " onClick={props.action} disabled={disabled}>{props.text}</button>
  </div>
}

export default Button