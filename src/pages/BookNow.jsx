import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const BookNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    package: "",
    startDate: "",
    endDate: "",
    adults: 1,
    children: 0,
    specialRequests: "",
    paymentMethod: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    upiId: "",
  });

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Fetch available packages
    const fetchPackages = async () => {
      try {
        const response = await axios.get("https://tours-backend-kg2g.onrender.com/api/tours");
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    fetchPackages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      // You can create a booking endpoint in your backend
      // For now, we'll simulate a successful booking
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: "success",
        message: "Booking submitted successfully! We'll contact you shortly.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        package: "",
        startDate: "",
        endDate: "",
        adults: 1,
        children: 0,
        specialRequests: "",
        paymentMethod: "",
        cardholderName: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        billingAddress: "",
        upiId: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to submit booking. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-32 mt-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl font-bold mb-4">Book Your Dream Vacation</h1>
            <p className="text-xl">Start your journey with Wanderlust Tours today!</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Complete Your Booking</h2>

            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Package Selection</h3>
                <div className="grid md:grid-cols-1 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Choose Your Package *</label>
                    <select
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a package</option>
                      {packages.map((pkg) => (
                        <option key={pkg._id} value={pkg._id}>
                          {pkg.title} - ${pkg.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Travel Dates */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Travel Dates</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Start Date *</label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">End Date *</label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      required
                      min={formData.startDate || new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Number of Travelers */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Number of Travelers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Adults (18+) *</label>
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      onChange={handleChange}
                      required
                      min="1"
                      max="20"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Children (0-17)</label>
                    <input
                      type="number"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      min="0"
                      max="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Additional Information</h3>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Special Requests or Requirements</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                  ></textarea>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Payment Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Payment Method *</label>
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select payment method</option>
                      <option value="credit-card">Credit Card</option>
                      <option value="debit-card">Debit Card</option>
                      <option value="upi">UPI</option>
                      <option value="paypal">PayPal</option>
                    </select>
                  </div>

                  {(formData.paymentMethod === "credit-card" || formData.paymentMethod === "debit-card") && (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 font-medium mb-2">Cardholder Name *</label>
                          <input
                            type="text"
                            name="cardholderName"
                            value={formData.cardholderName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-700 font-medium mb-2">Card Number *</label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                            maxLength="19"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Expiry Date *</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                            maxLength="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">CVV *</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            maxLength="4"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Billing Address *</label>
                        <textarea
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleChange}
                          required
                          rows="2"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Street Address, City, State, ZIP Code"
                        ></textarea>
                      </div>
                    </>
                  )}

                  {formData.paymentMethod === "upi" && (
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">UPI ID / VPA *</label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="yourname@paytm / yourname@gpay / yourname@phonepe"
                      />
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                        <p className="text-sm text-gray-700 mb-2 font-medium">Accepted UPI Apps:</p>
                        <p className="text-xs text-gray-600">Google Pay, PhonePe, Paytm, BHIM, and other UPI-enabled apps</p>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === "paypal" && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-gray-700">You will be redirected to PayPal to complete your payment after submitting this form.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-lg transition ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit Booking Request"}
                </button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  * Required fields. We'll contact you within 24 hours to confirm your booking.
                </p>
              </div>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">info@wanderlusttours.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-3">🕐</div>
              <h3 className="font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Sat: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookNow;
