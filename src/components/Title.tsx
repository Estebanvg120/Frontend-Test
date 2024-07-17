type Props = {
  text: string
};
function Title(props: Props) {
  return (
    <div className="row" >
      <div className="col">
        <h1>{props.text}</h1>
      </div>
    </div>
  )
}

export default Title;