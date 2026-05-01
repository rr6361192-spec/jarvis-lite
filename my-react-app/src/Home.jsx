import React, { useContext, useRef,useEffect } from 'react'
import Card from "../components/card"
import image1 from "../images/image1.png"
import image2 from "../images/image2.jpg"
import image3 from "../images/authBg.png"
import image4 from "../images/image4.png"
import image5 from "../images/image5.png"
import image6 from "../images/image6.jpeg"
import image7 from "../images/image7.jpeg"
import { RiImageAddLine } from "react-icons/ri";
import { userDataContext } from './context/UserContext'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";

function Home() {
  const {
    serverUrl,
    userData,
    setUserData,
    backendImage,
    setBackendImage,
    frontendImage,
    setFrontendImage,
    selectedImage,
    setSelectedImage
  } = useContext(userDataContext);

  const navigate = useNavigate();
  const inputImage = useRef();
  
useEffect(() => {
  console.log("backendImage updated:", backendImage);
  console.log("isFile:", backendImage instanceof File);
}, [backendImage]);
useEffect(() => {
  console.log("frontend updated:", frontendImage);
  console.log("isFile:", frontendImage instanceof File);
  console.log("search in use")
  console.log(frontendImage)
}, [frontendImage])
 const handleImage = (e) => {
  console.log("event:", e);
  console.log("files:", e.target.files);

  const file = e.target.files?.[0];
  console.log("file:", file);

  if (!file) return;

  setBackendImage(file);
  setFrontendImage(URL.createObjectURL(file));
  console.log(frontendImage)
  setSelectedImage(file); 
console.log(backendImage)

console.log(selectedImage)
  console.log("File direct:", file); // ✅ always correct

  e.target.value = null;
}
  

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradient(to top, black, #030353)",
        position: "relative"
      }}
    >
      <MdKeyboardBackspace
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          width: "25px",
          height: "25px",
          color: "white",
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      />

      <h1
        style={{
          color: "white",
          marginBottom: "40px",
          fontSize: "30px",
          textAlign: "center"
        }}
      >
        Select your <span style={{ color: "#7dd3fc" }}>Assistant Image</span>
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px"
        }}
      >
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />

        <div
          style={{
            width: window.innerWidth >= 1024 ? "150px" : "70px",
            height: window.innerWidth >= 1024 ? "250px" : "140px",
            backgroundColor: "#020220",
            border: selectedImage === "input" ? "4px solid white" : "2px solid rgba(0,0,255,0.4)",
            borderRadius: "1rem",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            boxShadow: selectedImage === "input" ? "0 0 20px #0d0de6" : "none",
            transition: "all 0.3s ease"
          }}
          onClick={() => {
            inputImage.current.click();
          console.log("gtmgtkm")
            setSelectedImage("input");
            console.log(selectedImage)
            
           
          }}
        >
          {!frontendImage && (
            <RiImageAddLine style={{ color: "white", width: "25px", height: "25px" }} />
          )}
          {frontendImage && (
            
            <img src={frontendImage} alt="selected" style={{ height: "100%", objectFit: "cover", }} />
            
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={inputImage}
          style={{ display: "none" }}
          onChange={handleImage}
        
  
  

        />
      </div>

      {selectedImage && (
        <button
          style={{
            minWidth: "150px",
            height: "60px",
            marginTop: "30px",
            backgroundColor: "white",
            color: "black",
            fontWeight: "600",
            fontSize: "19px",
            borderRadius: "9999px",
            cursor: "pointer",
            border: "none"
          }}
          onClick={() => navigate("/customize2")}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Home;