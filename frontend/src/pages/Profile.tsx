function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-10 w-[500px]">

        <div className="flex flex-col items-center">

          <img
            src="https://via.placeholder.com/120"
            alt="Profile"
            className="rounded-full mb-5"
          />

          <h1 className="text-3xl font-bold">
            Sakshi Shewale
          </h1>

          <p className="text-gray-600">
            Computer Science | 3rd Year
          </p>

        </div>

        <div className="mt-8 space-y-3">

          <p><strong>Email:</strong> sakshishewale@gmail.com</p>

          <p><strong>Skills:</strong> React, Java, Python</p>

          <p><strong>Projects:</strong> 3</p>

          <p><strong>Notes Uploaded:</strong> 12</p>

        </div>

      </div>

    </div>
  );
}

export default Profile;