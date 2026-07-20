import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import config from "../config";
import PasswordInput from "./PasswordInput";

const ForgotPasswordForm = () => {
  const [step, setStep] = useState(1); // 1: email, 2: otp, 3: new password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSuccess(false);
    try {
      await axios.post(`${config.API_URL}/api/auth/forgot-password/send-otp`, { email });
      setSuccess(true);
      setMessage("OTP sent! Check your email.");
      setStep(2);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSuccess(false);
    try {
      const res = await axios.post(`${config.API_URL}/api/auth/forgot-password/verify-otp`, { email, otp });
      setResetToken(res.data.resetToken);
      setSuccess(true);
      setMessage("OTP verified. Set your new password.");
      setStep(3);
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setSuccess(false);
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      await axios.post(`${config.API_URL}/api/auth/forgot-password/reset-password`, {
        resetToken,
        newPassword,
      });
      setSuccess(true);
      setMessage("Password reset successfully! Redirecting to sign in...");
      setTimeout(() => navigate("/signin"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Password reset failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <p className="text-sm text-gray-600">Enter your account email. We'll send a one-time code to verify it's you.</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <p className="text-sm text-gray-600">
              Enter the 6-digit code sent to <strong>{email}</strong>.
            </p>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength={6}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 tracking-widest text-center"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-sm text-gray-500 hover:underline"
            >
              Use a different email
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <PasswordInput
              name="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
            />
            <PasswordInput
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={6}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        {message && (
          <div className={`alert ${success ? "alert-success" : "alert-danger"} mt-4 mb-0 text-center py-2`} role="alert">
            {message}
          </div>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Remembered it?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
