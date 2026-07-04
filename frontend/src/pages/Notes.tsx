function Notes() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        📚 Notes Sharing
      </h1>

      <div className="flex justify-between mb-8">

        <input
          type="text"
          placeholder="Search Notes..."
          className="border p-3 rounded-lg w-96"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Upload Note
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {[1,2,3,4,5,6].map((note)=>(
          <div
            key={note}
            className="bg-white shadow-lg rounded-xl p-6"
          >

            <h2 className="text-xl font-bold">
              Data Structures Notes
            </h2>

            <p className="text-gray-600 mt-2">
              Subject: Data Structures
            </p>

            <p className="text-gray-600">
              Uploaded by Sakshi
            </p>

            <button className="mt-5 bg-green-600 text-white px-4 py-2 rounded-lg">
              Download
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Notes;