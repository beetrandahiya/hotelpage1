import logo from './montegobay-logo.png';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header">
        <img src={logo} alt="logo" />
        <div className='nav'>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/rooms">ROOMS</Link>
        <Link to="/promotions">PROMOTIONS</Link>

        </div>
        </div>
    );
}

export default Header;