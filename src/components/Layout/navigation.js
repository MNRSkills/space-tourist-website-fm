import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/destination'>Destination</Link>
      <Link to='/crew'>Crew</Link>
    </div>
  );
};

export default Navigation;
