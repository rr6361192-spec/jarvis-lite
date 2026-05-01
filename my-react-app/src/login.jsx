import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "./kk.png";

export function Login() {
  const navigate = useNavigate();

  const [register, setregister] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    const { name, value } = e.target;
    setregister((prev) => ({ ...prev, [name]: value }));
  };

  const login = async (e) => {
    e.preventDefault(); // 🚨 stop reload

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(register),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        navigate("/Home"); // redirect after login
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div style={containerWithImage}>
      <div style={glassStyle}>
        <h1 style={titleStyle}>Login</h1>

        <form style={formStyle} onSubmit={login}>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            name="email"
            value={register.email}
            onChange={submit}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            name="password"
            value={register.password}
            onChange={submit}
          />

          <button type="submit" style={primaryBtn}>
            Login
          </button>
        </form>

        <p style={textStyle}>Don’t have an account?</p>

        <button style={secondaryBtn} onClick={() => navigate("/")}>
          Go to Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;


//
// ================= STYLES =================
//

const containerWithImage = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const glassStyle = {
  backdropFilter: "blur(20px)",
  background: "rgba(0, 0, 0, 0.4)",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
  borderRadius: "20px",
  padding: "30px",
  width: "350px",
  marginTop:'50px',
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#38bdf8",
  marginBottom: "20px",
  textShadow: "0 0 10px #0ea5e9",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "10px 12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.15)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.2)",
  outline: "none",
};

const primaryBtn = {
  marginTop: "10px",
  background: "#0ea5e9",
  color: "white",
  padding: "10px",
  borderRadius: "10px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 0 10px #0ea5e9",
};

const secondaryBtn = {
  marginTop: "10px",
  width: "100%",
  border: "1px solid #38bdf8",
  color: "#38bdf8",
  padding: "10px",
  borderRadius: "10px",
  background: "transparent",
  cursor: "pointer",
};

const textStyle = {
  textAlign: "center",
  color: "#bae6fd",
  marginTop: "15px",
  fontSize: "14px",
};