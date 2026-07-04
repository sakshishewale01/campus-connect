function PYQ() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        📄 Previous Year Question Papers
      </h1>

      <div className="flex justify-between mb-8">

        <input
          placeholder="Search PYQs..."
          className="border p-3 rounded-lg w-96"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Upload PYQ
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {[1,2,3,4].map((paper)=>(
          <div
            key={paper}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <h2 className="font-bold text-xl">
              DBMS Semester Exam
            </h2>

            <p className="mt-2 text-gray-600">
              Year : 2025
            </p>

            <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg">
              View PDF
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default PYQ;