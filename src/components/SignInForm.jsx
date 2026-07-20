import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import config from "../config";
import PasswordInput from "./PasswordInput";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess(false);
    try {
      const res = await axios.post(`${config.API_URL}/api/auth/login`, formData);
      localStorage.setItem("token", res.data.token);
      setSuccess(true);
      setMessage("Logged in successfully!");
      setTimeout(() => navigate("/tours"), 1000);
    } catch (err) {
      console.error(err);
      const backendMessage = err.response?.data?.message;
      setMessage(backendMessage || "Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <PasswordInput name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </form>

        {/* Message */}
        {message && (
          <div className={`alert ${success ? "alert-success" : "alert-danger"} mt-4 mb-0 text-center py-2`} role="alert">
            {message}
          </div>
        )}

        <p className="mt-2 text-center text-sm text-gray-600">
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </p>

        {/* Don't have an account */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
