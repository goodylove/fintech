import { Outlet, Link } from "react-router-dom";

const Service = () => {
  return (
    <div>
      service
      <Link to="microlending">Product</Link>
      <Link to="realestate">Product Details</Link>
      <Outlet />
    </div>
  );
};

export default Service;
