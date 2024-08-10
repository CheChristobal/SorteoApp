import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de importar el CSS

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
          <span className="navbar-icon"></span>
        </button>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/registro" onClick={() => setIsOpen(false)}>Registro</Link></li>
          <li><Link to="/productos" onClick={() => setIsOpen(false)}>Productos</Link></li>
          <li><Link to="/quienes-somos" onClick={() => setIsOpen(false)}>Quienes Somos</Link></li>
          <li><Link to="/ganadores" onClick={() => setIsOpen(false)}>Ganadores</Link></li>
          <li><Link to="/bases-de-sorteos" onClick={() => setIsOpen(false)}>Bases de Sorteos</Link></li>
          <li><Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
