import { Link } from "react-router-dom";

export default function NavLink({ href, label }) {
  return (
    <Link to={href} className="nav-link, max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
      {label}
    </Link>
  );
}