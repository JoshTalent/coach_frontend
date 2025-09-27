"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Backend URL stored in a variable
const API_BASE_URL = "https://coach-backend-c70n.onrender.com";

const services = [
  "Boxing Training",
  "Personal Coaching"
];

const Booking = ({ defaultService }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    date: "",
    time: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/booking`, formData);

      if (response.data.success) {
        setStatus({ type: "success", message: "Booking submitted successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: defaultService || "",
          date: "",
          time: "",
          message: "",
        });
        setStep(1);
      } else {
        setStatus({
          type: "error",
          message: response.data.message || "Failed to submit booking.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative py-24 bg-black text-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-500 uppercase">
              Book a Session with Olivier
            </h2>
            <div className="w-28 h-1 bg-purple-500 rounded-full mx-auto mt-2"></div>
            <p className="text-gray-400 mt-4 text-lg">
              Step-by-step booking for training or services at The Real Boxing Club & Soho Gym.
            </p>
          </motion.div>

          {status && (
            <div
              className={`mb-6 p-4 rounded-xl text-center ${
                status.type === "success"
                  ? "bg-green-600 text-black"
                  : "bg-red-600 text-white"
              }`}
            >
              {status.message}
            </div>
          )}

          <motion.form
            className="bg-gray-900 rounded-3xl shadow-2xl p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Step 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s, idx) => (
                    <div
                      key={idx}
                      onClick={() => setFormData({ ...formData, service: s })}
                      className={`p-4 rounded-xl border-2 cursor-pointer text-center transition ${
                        formData.service === s
                          ? "bg-purple-500 border-purple-500 text-black shadow-lg"
                          : "border-gray-700 hover:border-purple-500 hover:bg-gray-800"
                      }`}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                  />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <textarea
                  name="message"
                  placeholder="Additional Details (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-purple-500 transition"
                />
                <div className="mt-4 bg-gray-800 rounded-xl p-4">
                  <h4 className="text-purple-500 font-bold mb-2">Summary</h4>
                  <p><strong>Service:</strong> {formData.service}</p>
                  <p><strong>Date:</strong> {formData.date}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                  Previous
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
                >
                  Next
                </button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(128,0,255,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto px-6 py-2 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
                >
                  {loading ? "Submitting..." : "Submit Booking"}
                </motion.button>
              )}
            </div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;
