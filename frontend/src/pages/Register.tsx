import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    year: "",
    branch: "",
    skills: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/register", {
        ...formData,
        year: Number(formData.year),
      });

      alert(response.data.message);

      setFormData({
        full_name: "",
        email: "",
        password: "",
        year: "",
        branch: "",
        skills: "",
      });

      navigate("/login");
    } catch (error: any) {
      console.error("Registration Error:", error);

      if (error.response) {
        console.log("Backend Error:", error.response.data);
        alert(
          error.response.data.message ||
            JSON.stringify(error.response.data)
        );
      } else if (error.request) {
        alert(
          "Cannot connect to the backend server.\n\nMake sure your backend is running on port 5000."
        );
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">

      <div className="bg-white shadow-xl rounded-xl p-8 w-[450px]">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-4"
            required
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (Example: React, Java, Python)"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;