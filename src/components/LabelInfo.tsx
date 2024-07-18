import { Strings } from "../assets/strings/Strings";

type Props = {
  title: string,
  text?: string,
  price?: number,
  available?: number,
  vertical?: boolean,
};

function LabelInfo(props: Props) {
  let renderData;
  if (props.available && props.available > 0) {
    renderData = <p className="card-text">{props.available}</p>
  }
  if (props.available === 0) {
    renderData = <p className="card-text">{Strings.noUnits}</p>
  }
  if (props.price) {
    renderData = <p className="card-text">$ {props.price}</p>
  }
  if (props.text) {
    renderData = <p className="card-text"> {props.text}</p>
  }
  const divclass = props.vertical ? 'col-6' : '';
  return (
    <div className="row">
      <div className={divclass}>
        <h5 className="card-title p-2">{props.title}</h5>
      </div>
      <div className={divclass}>
        {renderData}
      </div>
    </div>
  );
}

export default LabelInfo;