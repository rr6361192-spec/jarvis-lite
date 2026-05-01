import React from 'react'
import styles from './page.module.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState } from 'react';
function Home() {
const [register,setregister]=useState({
  username:"",
  email:"",
  password:""

})
const [login,setlogin]=useState({
 username:"",
  email:"",
  password:""

})
const submit=(e)=>{
  const{name,value}=e.target;
setregister((prev)=>({...prev,...{[name]:value}}))

}
const signup= async()=>{
  console.log(register)
 
 const response = await fetch('http://localhost:4000/user', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(register) // <-- stringify the object
});
   const data = await response.json();

}
   const signin= async()=>{
  console.log(login)
 
 const response = await fetch('http://localhost:4000/login', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(login) // <-- stringify the object
});
   const data = await response.json();
 
  
    
}
const sub=(e)=>{
  const{name,value}=e.target;
setlogin((prev)=>({...prev,...{[name]:value}}))

}


  return (
    <div className={styles.container}>
      <div style={{ display: "flex", gap: "190px" ,position:'absolute',top:'200px',left:'590px'}}>

        {/* Register Card */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "25px",
            borderRadius: "8px",
            width: "280px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
            height:'400px',
            display:'flex',
            flexDirection:'column',
            gap:'30px'
            
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Register</h2>
<div style={{width:'90%',position:'relative'}} className={styles.inputcontainer}>
          <input
            className={styles.input}
            type="text"
            name="username"
            value={register.username}
            onChange={(e)=>submit(e)}
            style={{paddingBottom:'10px'}}
            required
            
          />
    <label className={styles.label}>Enter UserName</label>
    <span className={styles.span}></span>
    </div>
    <div style={{width:'90%',position:'relative'}} className={styles.inputcontainer}>
          <input
            className={styles.input}
            type="email"
            name="email"
             value={register.email}
            onChange={(e)=>submit(e)}
            required
            
          />
 <label className={styles.label}>Enter Email</label>
    <span className={styles.span}></span>
    </div>
<div style={{width:'90%',position:'relative'}} className={styles.inputcontainer}>
          <input
            className={styles.input}
            type="password"
            name="password"
             value={register.password}
            onChange={(e)=>submit(e)}
          required
          />

<label className={styles.label}>Enter Password</label>
    <span className={styles.span}></span>
    </div>
          <button style={buttonStyle} onClick={()=>signup()} >
            Register
            
          </button>
        </div>

        {/* Login Card */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "25px",
            borderRadius: "8px",
            width: "280px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Login</h2>

          <input
            style={inputStyle}
            type="text"
            name="username"
            value={login.username}
            onChange={(e)=>sub(e)}
            placeholder="Name"
          />

          <input
            style={inputStyle}
            type="email"
            name="email"
            value={login.email}
             onChange={(e)=>sub(e)}
            placeholder="Email"
          />

          <input
            style={inputStyle}
            type="password"
            name="password"
            value={login.password}
             onChange={(e)=>sub(e)}
            placeholder="Password"
          />

          <button style={buttonStyle} onClick={()=>
            signin()
          }>
            Login
          </button>
        </div>
<div style={{position:'relative',top:'310px',display:'flex',left:'-420px',gap:'25px'}}>
      
      {/* Google Button */}
      <div>
        <FcGoogle size={30} />
      </div>
      
<div>
      {/* Facebook Button */}
      
        <FaFacebook size={30} />
      
      </div>
      <div>
      {/* Facebook Button */}
      
        

  <FaTwitter size={30} />

      
      </div>

    </div>
      </div>
    </div>
  );
}
export default Home;

/* Reusable styles */
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  border: "1px solid #ddd",
  borderRadius: "6px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  backgroundColor: "#d96c4f",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};