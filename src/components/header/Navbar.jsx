import { Link } from "react-router-dom"

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ right: toggle && "0" }} className="navbar">
      <div className="navbar-close-icon">
        <i onClick={() => setToggle(false)} className="bi bi-x-lg"></i>
      </div>
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
        الصفحة الرئیسیة
        </Link>
        <Link to="/products" onClick={() => setToggle(false)} className="navbar-link">
        الإلكترونيات  
        </Link>
        <li onClick={() => setToggle(false)} className="navbar-link">
          المنزل 
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          رجالية
        </li>
        <li onClick={() => setToggle(false)} className="navbar-link">
          نسائیة
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
