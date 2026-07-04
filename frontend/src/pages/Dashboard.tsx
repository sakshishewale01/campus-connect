import { Link } from "react-router-dom";

function Dashboard() {

    return (

        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}

            <div className="bg-blue-700 text-white p-5 flex justify-between">

                <h1 className="text-2xl font-bold">
                    CampusConnect
                </h1>

                <button className="bg-red-500 px-4 py-2 rounded">
                    Logout
                </button>

            </div>

            {/* Welcome */}

            <div className="p-8">

                <h2 className="text-3xl font-bold mb-8">
                    Welcome to Dashboard 👋
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <Link
                        to="/notes"
                        className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-bold">📚 Notes</h3>
                        <p className="mt-3">
                            Upload and Download Notes
                        </p>
                    </Link>

                    <Link
                        to="/pyq"
                        className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-bold">📄 PYQs</h3>
                        <p className="mt-3">
                            Previous Year Question Papers
                        </p>
                    </Link>

                    <Link
                        to="/forum"
                        className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-bold">💬 Forum</h3>
                        <p className="mt-3">
                            Ask Doubts
                        </p>
                    </Link>

                    <Link
                        to="/projects"
                        className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-bold">👨‍💻 Projects</h3>
                        <p className="mt-3">
                            Find Project Partners
                        </p>
                    </Link>

                    <Link
                        to="/profile"
                        className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition"
                    >
                        <h3 className="text-2xl font-bold">👤 Profile</h3>
                        <p className="mt-3">
                            Manage Your Profile
                        </p>
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;   