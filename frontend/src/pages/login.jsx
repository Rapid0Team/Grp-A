import React, { useState } from "react";
import axios from "axios";
import "../assets/login.css";

export default function Login() {
  // Step 1: Create state variables for form input
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Debug log
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log("Response:", response.data); // Debug log
      localStorage.setItem("token", response.data.token);
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setTimeout(() => {
        window.location.href = "/";
    }, 1000);
    } catch (error) {
      console.error("Error details:", error); // Debug log
      setErrorMessage(
        error.response?.data?.message || 
        "An error occurred while trying to login."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <div className="w-full flex h-screen">
        <div className="w-full h-full relative">
          <div
            className="absolute w-full md:w-2/3 inset-0 bg-[url(public/images/login.jpg)] blur-[4px] bg-cover bg-repeat-y z-0"
          ></div>

          <div
            className="absolute w-full md:w-1/3 inset-y-0 right-0 bg-[#F6FBFF] z-0"
          ></div>

          <form className="w-full h-full flex justify-center items-center" onSubmit={handleSubmit}>
            <div className="relative flex flex-col md:flex-row w-11/12 md:w-2/3 h-5/6 p-2 rounded-2xl z-10 bg-white shadow-lg">
              <img
                src="/images/login.jpg"
                className="w-full md:w-5/8 h-48 md:h-auto rounded-xl object-cover"
              />

              <div className="w-full md:w-1/3 flex flex-col justify-center md:ml-4 mb-20 p-8">
                <h1 className="text-center pt-8 text-3xl font-bold text-gray-800">
                  Account Login
                </h1>
                <div className="flex flex-col gap-4 mt-8">
                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Email"
                  />
                  {/* Password Input */}
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Password"
                  />
                  {/* Error and Success Messages */}
                  {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                  {successMessage && <div className="text-green-500">{successMessage}</div>}
                  <button
                    type="submit"
                    className="bg-[#ff8025e7] cursor-pointer text-white p-2 rounded-lg hover:bg-[#ff6a00] transition-colors"
                  >
                    Login
                  </button>
                  <h3 className="text-md font-semibold">
                    Don't have an account?{" "}
                    <a
                      href="register"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Create Account
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
