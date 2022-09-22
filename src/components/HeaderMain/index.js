/* eslint-disable jsx-a11y/alt-text */
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/3.png";

const HeaderMain = () => {
  return (
    <div className="header-content">
      <header>
        <Link to="/">
          <img src={logo} />
        </Link>
        <nav>
          <Link className="link-name" to="/">
            Home
          </Link>
          <Link className="link-name" to="/create">
            Add
          </Link>
        </nav>
      </header>
    </div>
  );
};

export { HeaderMain };
