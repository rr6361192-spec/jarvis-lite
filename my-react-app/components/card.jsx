import React, { useContext, useState } from 'react'
import { userDataContext } from '../src/context/UserContext'

function Card({ image }) {
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

  // Optional: hover effect state
  const [isHovered, setIsHovered] = useState(false);

  // Determine border and shadow based on selection or hover
  const isSelected = selectedImage === image;
  const borderStyle = isSelected || isHovered ? "4px solid white" : "2px solid rgba(0,0,255,0.4)";
  const boxShadow = isSelected || isHovered ? "0 0 20px #0d0de6" : "none";

  return (
    <div
      style={{
        width: window.innerWidth >= 1024 ? "150px" : "70px",
        height: window.innerWidth >= 1024 ? "250px" : "140px",
        backgroundColor: "#020220",
        border: borderStyle,
        borderRadius: "1rem",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: boxShadow,
        transition: "all 0.3s ease"
      }}
      onClick={() => {
        setSelectedImage(image);
        console.log("selectedImage:", selectedImage);
           
        setBackendImage(null);
        setFrontendImage(null);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt="card"
        style={{
          height: "100%",
          objectFit: "cover",
          width: "100%"
        }}
      />
    </div>
  );
}

export default Card;