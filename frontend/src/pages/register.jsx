import React, { useState } from "react";
import axios from "axios";
import "../assets/login.css";

export default function Register() {
  // Step 1: Create state variables to capture form input
  const [formData, setFormData] = useState({
    username: "",
    fullname: "", // Changed from fullName to fullname to match backend
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
    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (!formData.username || !formData.fullname || !formData.email || !formData.password) {
        setErrorMessage("All fields are required");
        return;
    }

    try {
        const response = await axios.post("http://localhost:5000/api/auth/register", formData);
        setSuccessMessage(response.data.message);
        
        // Clear form after successful registration
        setFormData({
            username: "",
            fullname: "",
            email: "",
            password: ""
        });

        // Redirect to login page after 2 seconds
        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);

    } catch (error) {
        setErrorMessage(
            error.response?.data?.message || 
            "Registration failed. Please try again."
        );
    }
  };

  return (
    <div className="container">
      <div className="w-full flex h-screen">
        <div className="w-full h-full relative">
          <div
            className="absolute w-full md:w-2/3 inset-0 bg-[url(public/images/register.jpg)] blur-[4px] bg-cover bg-repeat-y z-0"
          ></div>
          <div
            className="absolute w-full md:w-2/3 inset-0 bg-gradient-to-r from-[#00000080] to-[#00000020] z-0"
          ></div>

          <div
            className="absolute w-full md:w-1/3 inset-y-0 right-0 bg-[#9fd4ff46] z-0"
          ></div>

          <form className="w-full h-full flex justify-center items-center" onSubmit={handleSubmit}>
            <div className="relative flex flex-col md:flex-row w-11/12 md:w-2/3 h-5/6 p-2 rounded-2xl z-10 bg-white shadow-lg">

              <div className="w-full md:w-1/2 flex flex-col justify-center md:mr-4 mb-20 p-8">
                <h1 className="text-center pt-8 text-3xl font-bold text-gray-800">
                  Create Account
                </h1>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 p-2 pl-10 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Username"
                    />
                    <span className="absolute left-3 top-3 text-gray-500">👤</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="fullname" // Changed from fullName to fullname
                      value={formData.fullname} // Changed from fullName to fullname
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 p-2 pl-10 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Full Name"
                    />
                    <span className="absolute left-3 top-3 text-gray-500">📝</span>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 p-2 pl-10 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Email"
                    />
                    <span className="absolute left-3 top-3 text-gray-500">✉️</span>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 p-2 pl-10 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Password"
                    />
                    <span className="absolute left-3 top-3 text-gray-500">🔒</span>
                  </div>

                  {/* Error and Success Messages */}
                  {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                  {successMessage && <div className="text-green-500">{successMessage}</div>}

                  <button
                    type="submit"
                    className="bg-[#ff8b37ee] w-1/3 mx-auto cursor-pointer text-white p-2 rounded-lg hover:bg-[#ff7c1e] transition-colors"
                  >
                    Register
                  </button>
                  <h3 className="text-md font-semibold">
                    Already have an account?{" "}
                    <a
                      href="login"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Login
                    </a>
                  </h3>
                </div>
              </div>
              <img
                src="/images/register.jpg"
                className="w-full hidden md:w-1/2 sm:flex h-48 md:h-auto rounded-xl object-cover"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
