import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Cheeses</Link>
        <Link to="/cheesemakers">Cheese Makers</Link>
        <Link to="/about">About</Link>
        <Link to="/addcheeseform">Add a Cheese</Link>
      </nav>
    </header>
  );
};

export default Header;
