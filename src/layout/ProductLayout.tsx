import { Outlet } from "react-router-dom";

function ProductLayout() {
  return (<div className="col-row">
    <Outlet />
  </div>)
}

export default ProductLayout;
