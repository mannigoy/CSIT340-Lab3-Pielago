import { Link } from "react-router-dom";

export default function NavLink({ href, label }) {
  return (
    <Link to={href} className="nav-link">
      {label}
    </Link>
  );
}