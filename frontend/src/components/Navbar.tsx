import { Link } from "react-router-dom";
import logo from "../assets/logos/image.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="CampusConnect"
            className="h-12 w-12 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              CampusConnect
            </h1>

            <p className="text-xs text-gray-500">
              Learn • Share • Grow
            </p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 text-gray-700">

          <Link to="/">Home</Link>

          <Link to="/notes">Notes</Link>

          <Link to="/pyq">PYQs</Link>

          <Link to="/forum">Forum</Link>

          <Link to="/projects">Projects</Link>

        </div>

        <div className="flex gap-3">

          <Link
            to="/login"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;