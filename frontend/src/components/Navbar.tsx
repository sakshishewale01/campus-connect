import { Link } from "react-router-dom";
import logo from "../assets/logos/image.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow bg-white">

      <h2 className="text-2xl font-bold text-blue-700">
        CampusConnect
      </h2>

      <div className="flex gap-8">

        <Link to="/">Home</Link>

        <Link to="/">Features</Link>

        <Link to="/">About</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      </div>

    </nav>
  );
}

export default Navbar;