/* eslint-disable jsx-a11y/alt-text */
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/3.png";

const HeaderMain = () => {
  return (
    <div className="header-content">
      <header>        
        <Link to="/">
          <img src={logo} className='imag-header' />
        </Link>          
      </header>
    </div>
  );
};

export { HeaderMain };
