import { Link } from "react-router-dom";
import NavLink from "./NavLink";


export default function Navbar() {
 return (
    <nav className="navbar">
      <Link to="/" className="nav-name">
        Emman Roy Pielago
      </Link>

      <NavLink href="/about" label="About" />
      <NavLink href="/skills" label="Skills" />
      <NavLink href="/projects" label="Projects" />
      <NavLink href="/experience" label="Experience" />
      <NavLink href="/contact" label="Contact" />
    </nav>
  );
}