import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-6">

      <h2 className="text-3xl font-bold mb-8">
        CampusConnect
      </h2>

      <div className="space-y-4">

        <Link to="/dashboard" className="block">
          Dashboard
        </Link>

        <Link to="/notes" className="block">
          Notes
        </Link>

        <Link to="/pyq" className="block">
          PYQs
        </Link>

        <Link to="/forum" className="block">
          Forum
        </Link>

        <Link to="/projects" className="block">
          Projects
        </Link>

        <Link to="/profile" className="block">
          Profile
        </Link>

      </div>

    </div>
  );
}

export default Sidebar;