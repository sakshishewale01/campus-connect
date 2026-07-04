function Register() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-blue-50">

      <div className="bg-white shadow-xl rounded-xl p-10 w-[500px]">

        <h2 className="text-3xl font-bold text-center mb-6">

          Register

        </h2>

        <input
          placeholder="Full Name"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          placeholder="Email"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          placeholder="Year"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          placeholder="Branch"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <textarea
          placeholder="Skills"
          className="border p-3 rounded-lg w-full mb-5"
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded-lg">

          Register

        </button>

      </div>

    </div>

  );

}

export default Register;