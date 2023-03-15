/* eslint-disable jsx-a11y/alt-text */
import "./style.css";
import { Link } from "react-router-dom";
import qrlogo from "../../assets/qrlogo.jpg";

const HeaderMain = () => {
  return (
    <div className="header-content">
      <header>        
        <Link to="/">
          <img src={qrlogo} className='imag-header' />
        </Link> 
        <Link to="/generator">Gerar QrCode</Link>         
      </header>
    </div>
  );
};

export { HeaderMain };
