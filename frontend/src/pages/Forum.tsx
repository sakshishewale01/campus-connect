function Forum() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        ❓ Doubt Forum
      </h1>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-8">
        Ask a Question
      </button>

      <div className="space-y-6">

        {[1,2,3].map((question)=>(
          <div
            key={question}
            className="bg-white shadow-lg rounded-xl p-6"
          >

            <h2 className="font-bold text-xl">
              How does JWT Authentication work?
            </h2>

            <p className="mt-3 text-gray-600">
              Asked by Computer Science Student
            </p>

            <button className="mt-4 text-blue-600 font-semibold">
              View Answers →
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Forum;