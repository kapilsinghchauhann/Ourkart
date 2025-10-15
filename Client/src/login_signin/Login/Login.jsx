import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { useCart } from "../../CartContext";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("Login data:", formData);
  //   // Add your authentication logic here
  // };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", { // make sure path matches backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        // Save token + userId for later use
        localStorage.setItem("userId", data.userId);
        alert("Signup successful !");
        setIsLoggedIn(true);
        localStorage.setItem('token', data.token); // Save token in localStorage
        console.log(isLoggedIn);
        
        // Redirect to Minutes page
        navigate("/MinutesPage");
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign In</button>
        <p className="signup-text">
          Don’t have an account? <Link to="/Signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
