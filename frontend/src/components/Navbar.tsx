import { Link } from "react-router-dom";
import { FileUser } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <FileUser size={26} />

          <span>CV Portfolio</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <a href="#members">Members</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
