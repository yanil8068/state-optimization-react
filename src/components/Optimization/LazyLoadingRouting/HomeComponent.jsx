import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
      <h1>HomeComponent</h1>
      <Link to="/Contact">Contact</Link>
    </div>
  );
};

export default HomeComponent;
