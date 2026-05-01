
           import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "./context/UserContext";

function AuthUI() {
  const { userData, setUserData } = useContext(userDataContext);

const navigate = useNavigate();
    const [registerd,setregisterd]=useState({
      username:"",
      email:"",
      password:""
    
    })
    const submit=(e)=>{
      const{name,value}=e.target;
    setregisterd((prev)=>({...prev,...{[name]:value}}))
    
    }
    const signup= async()=>{
      console.log(registerd)
     
     const response = await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerd) // <-- stringify the object
   });
       const data = await response.json();
       setUserData(data)
       console.log(data.success)
       console.log(data.message)
       if (data.success) {
        
    navigate("/login"); // redirect to login page
  }
     
      

        
    }
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #000000, #1e3a8a)",
        
      }}
    >
      {/* Glass Container */}
      <div
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          borderRadius: "20px",
          padding: "30px",
          width: "350px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            color: "#93c5fd",
            marginBottom: "20px",
          }}
        >
          Sign Up
        </h1>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
        style={inputStyle}
            placeholder="Username"
             type="text"
          name="username"
           value={registerd.username}          // controlled by state
                onChange={(e) => submit(e)} 
          />

          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
             name="email"
            value={registerd.email}
            onChange={(e)=>submit(e)}
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
             name="password"
            value={registerd.password}
            onChange={(e)=>submit(e)}
          />

          <button
          type="button"
            style={{
              marginTop: "10px",
              background: "#3b82f6",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}onClick={()=>signup()} 
          >
            
            Sign Up
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            color: "#bfdbfe",
            marginTop: "15px",
            fontSize: "14px",
          }}
        >
          Already have an account?
        </p>

        <button
          style={{
            marginTop: "10px",
            width: "100%",
            border: "1px solid #60a5fa",
            color: "#93c5fd",
            padding: "10px",
            borderRadius: "10px",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px 12px",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.2)",
  color: "white",
  border: "none",
  outline: "none",
};

export default AuthUI;
