import "./navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {

  return (
    <div className="navvbar">
      <img src={assets.logo} alt="logo" className="logo"/>
      <div className="divider"></div>
      <div className="certificate">
        ‘A’ grade Electrical Contractors & Engineers
      </div>
      <ul className="navvbar-menu">
        <li>About</li>
        <li>Services</li>
        <li>Portfolio Projects</li> 
        <li>All Project</li>
      </ul>
      <div className="navvbar-right">
        <button className="button-border">Contact</button>
        <button className="button-orange">Enquire</button>
      </div>
    </div>
  );
};

export default Navbar;
