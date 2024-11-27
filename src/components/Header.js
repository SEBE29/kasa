import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.svg";
import "../styles/components/header.scss";

function Header() {
  const router = useLocation();
  const route = router.pathname;
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>
      <nav>
        <Link to="/" className={`${route === "/" ? "active" : ""}`}>
          Accueil
        </Link>
        <Link to="/about" className={`${route === "/about" ? "active" : ""}`}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
