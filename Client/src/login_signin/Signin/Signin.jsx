import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // Add your API call or backend integration here
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="number">Phone Number</label>
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="Enter your phone number"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter a password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
        <p className="login-text">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
}
