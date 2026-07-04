function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        🤝 Project Collaboration
      </h1>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-8">
        Create New Project
      </button>

      <div className="grid md:grid-cols-2 gap-6">

        {[1,2,3].map((project)=>(
          <div
            key={project}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <h2 className="font-bold text-2xl">
              AI Attendance System
            </h2>

            <p className="mt-3 text-gray-600">
              Looking for React & Node.js Developers
            </p>

            <p className="mt-2">
              Team Size : 3
            </p>

            <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg">
              Join Project
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Projects;