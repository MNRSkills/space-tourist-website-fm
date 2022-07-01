import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div>
      Navigation
      <Link to='/'>Home</Link>
      <Link to='/destination'>Destination</Link>
    </div>
  );
};

export default Navigation;
