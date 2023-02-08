import {NavLink} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className= "container-fluid">
      <h2>abelEgbele</h2>
      <nav className = "navbar navbar-expand-lg">
        <NavLink to="/" className = "link">Home</NavLink>
        <NavLink to="/project" className = "link">Projects</NavLink>
        <NavLink to="/projectgallery" className = "link">Gallery</NavLink>
        <NavLink to="/contact" className = "link">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;