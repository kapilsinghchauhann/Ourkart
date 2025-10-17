import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

export default function Signup() {

  const { setIsLoggedIn } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Signup data:", formData);
  //   // Add your API call or backend integration here
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful !");
        setIsLoggedIn(true);
        localStorage.setItem('token', data.token); // Save token in localStorage
        navigate("/Minutespage");
      } else {
        alert(data.error || 'Registration Failed');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    }
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
