import './navbar.css';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <ul>
          <li><a href="#inicio">inicio</a></li>
          <li><a href="#productos">productos</a></li>
          <li><a href="#contacto">contacto</a></li>
        </ul>
      </div>

      <div className="navbar-icon">
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;
