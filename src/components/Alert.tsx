type Props = {
  message: string
}
function Alert(props: Props) {
  return (
    <div className="alert alert-danger d-flex align-items-center justify-content-center" role="alert" >
      <div>
        {props.message}
      </div>
    </div >
  )

}

export default Alert;