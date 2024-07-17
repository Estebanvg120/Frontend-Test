import { dataSelect } from "../interfaces/Products.interface";
import { Strings } from "../strings/Strings";

type Props = {
  text: string,
  data?: dataSelect[],
  stock?: number
};

function LabelSelect(props: Props) {
  const stockOptions = [];
  let render;
  if (props.data) render = props.data;
  if (props.stock && props.stock > 0) {
    const buylimit = props.stock > 7 ? 7 : props.stock;
    for (let x = 1; x <= buylimit; x++) {
      stockOptions.push({ value: x, option: x });
    }
    render = stockOptions;
  }
  const disabled = props.stock === 0 ? true : false;
  const finalData = render?.map(element =>
    <option key={element.value} value={element.value}>{element.option}</option>
  );
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default">{props.text}</span>
      <select className="form-select w-md-50 d-inline" aria-label="Default select example" disabled={disabled}>
        <option selected>{Strings.select}</option>
        {finalData}
      </select>
    </div>
  );
}

export default LabelSelect;