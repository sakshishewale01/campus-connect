function Login() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-blue-50">

      <div className="bg-white shadow-xl rounded-xl p-10 w-[420px]">

        <h2 className="text-3xl font-bold mb-6 text-center">

          Login

        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg w-full mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg w-full mb-6"
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded-lg">

          Login

        </button>

      </div>

    </div>

  );
}

export default Login;