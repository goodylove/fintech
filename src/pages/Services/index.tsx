import { Outlet, Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <div className="w-full h-[100vh]">
        <Link to="microlending"></Link>
        <Link to="investmentpage"></Link>
        <Link to="procurment"></Link>
        <Link to="bdc"></Link>
        <Link to="realestate"></Link>
        <Outlet />
      </div>
    </>
  );
};

export default Service;
