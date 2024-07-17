import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <div className="col-12 p-3" >
      <button type="button" className="btn rounded-pill" onClick={() => navigate(-1)} >
        <img src={"/backicon.png"} alt="..." style={{ width: '30px', height: '30px' }} />
      </button>
    </div>
  );
}

export default ButtonBack;