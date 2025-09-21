import React, { useState, useRef } from "react";
import { authStore } from "../../store/authStore";
// import { verify } from "crypto";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function VerifyEmailForm() {

    const {verifyEmail, isLoading, error} = authStore();
    const navigate = useNavigate();

  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ""); // allow only numbers
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // move to next input if exists
      if (index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Submitted OTP:", code);

    try {
        await verifyEmail(code);
        navigate('/');
        toast.success("Verfied");
    } catch (err) {
        throw error;
    } 

    // send `code` to backend for verification
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Verify Your Email
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Please enter the 6-digit code we sent to your email
        </p>

        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
