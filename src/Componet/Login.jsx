import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
const Login = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const InputField = ({ icon: Icon, type, placeholder, value, onChange }) => (
    <div
      className={`flex items-center border rounded-lg p-3 my-4 transition-all duration-300 ${
        darkMode ? "border-gray-500 bg-[#9ECFD4]" : "border-gray-300 bg-white"
      } focus-within:ring-2 focus-within:ring-indigo-500`}
    >
      <Icon
        className={`mr-3 text-xl ${
          darkMode ? "text-gray-800" : "text-gray-400"
        }`}
      />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className={`w-full outline-none bg-transparent ${
          darkMode ? "text-gray-900 placeholder-gray-700" : "text-gray-800"
        }`}
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { username, email, password });
    alert(`Logging in with Username: ${username}, Email: ${email}`);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      offset: 100, // distance to start animation
      easing: "ease-in-out", // animation type
      once: false, // whether animation should happen only once
      infinte: true
    });
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
        darkMode ? "bg-[#70B2B2]" : "bg-gray-100 sm:bg-indigo-50"
      }`}
    >
      <button data-aos="fade-left"
        onClick={() => setDarkMode(!darkMode)}
        className={`absolute top-10 right-10 py-3 px-6 rounded-lg flex items-center gap-2 shadow-md transition-all duration-300 ${
          darkMode
            ? "bg-gray-900 text-white hover:bg-gray-800"
            : "bg-white text-black hover:bg-gray-200"
        }`}
      >
        {darkMode ? (
          <>
            <CiLight className="text-2xl" /> Light
          </>
        ) : (
          <>
            <MdDarkMode className="text-2xl" /> Dark
          </>
        )}
      </button>

      {/* 🌗 Login Card */}
      <div
        className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition-all duration-500 ${
          darkMode ? "bg-[#9ECFD4]" : "bg-white"
        }`}
      >
        <h2
          className={`text-3xl font-bold text-center mb-2 ${
            darkMode ? "text-gray-900" : "text-indigo-700"
          }`}
        >
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <InputField data-aos="flip-up"
            icon={FaUser}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputField
            icon={FaEnvelope}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            icon={FaLock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            type="submit"
            className={`w-full py-3 mt-6 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 ${
              darkMode
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            Log In
          </button>
        </form>

        <div
          className={`text-center mt-6 ${
            darkMode ? "text-gray-900" : "text-gray-600"
          }`}
        >
          Don’t have an account?{" "}
          <a
            href="#"
            className={`font-medium transition-colors ${
              darkMode
                ? "text-gray-800 hover:text-gray-700"
                : "text-indigo-600 hover:text-indigo-800"
            }`}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
