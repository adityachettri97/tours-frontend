import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import config from "../config";
import PasswordInput from "./PasswordInput";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSuccess(false);

    // Client-side confirm password check
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      await axios.post(`${config.API_URL}/api/auth/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        adminCode: formData.adminCode,
      });

      setSuccess(true);
      setMessage("Registered successfully! Redirecting to sign in...");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        adminCode: "",
      });
      setTimeout(() => navigate("/signin"), 1200);
    } catch (err) {
      console.error(err);
      const backendMessage = err.response?.data?.message;
      setMessage(backendMessage || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <PasswordInput name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <input
            name="adminCode"
            placeholder="Admin Code"
            onChange={handleChange}
            value={formData.adminCode}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Sign Up
          </button>
        </form>

        {/* Message */}
        {message && (
          <div className={`alert ${success ? "alert-success" : "alert-danger"} mt-4 mb-0 text-center py-2`} role="alert">
            {message}
          </div>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Already signed up?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
