import { Link } from "react-router-dom";

const Navitem = ({ label, to }) => {
  return (
    <Link to={to} className="mr-5 hover:text-red-700">
      {label}
    </Link>
  );
};

export default Navitem;
