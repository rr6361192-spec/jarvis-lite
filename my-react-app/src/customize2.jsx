import React, { useContext, useState,useEffect } from 'react'
import { userDataContext } from './context/UserContext'
import axios from 'axios'
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Customize2() {
    const { userData, backendImage, selectedImage, serverUrl, setUserData } = useContext(userDataContext)
    const [assistantName, setAssistantName] = useState(userData?.AssistantName || "")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
useEffect(() => {
  if (userData) {
    console.log("userData updated:", userData);
  }
}, [userData]);


   const handleUpdateAssistant = async (req,res) => {
console.log(req.body)
          setLoading(true)
  try {
    // 1️⃣ Create a FormData object to send multipart/form-data
   // const formData = new FormData();
   // Utility function to check if input is a File or Blob
function isFile(input) {
  return input instanceof File || input instanceof Blob;
}
const formData = new FormData();

// 1️⃣ Add assistant name
formData.append("assistantName", assistantName);

// 2️⃣ Decide which image to send
let imageToSend = backendImage || selectedImage;

if (imageToSend) {
  if (isFile(imageToSend)) {
    
    formData.append("assistantImage", imageToSend);
  } else {
    // Send as URL/string
    formData.append("imageUrl", imageToSend);
  }
}
    // 4️⃣ Make the POST request to update assistant
    const result = await axios.post(
      `${serverUrl}/update`, // Backend endpoint
      formData,
      { withCredentials: true } // Needed if backend uses cookies/session
    );
             setLoading(false)
             console.log("hii")
            
            setUserData(result.data)
            
            navigate("/custom")
    // 5️⃣ Handle the response
    console.log("Assistant updated successfully:", result.data);

  } catch (error) {
    // 6️⃣ Error handling
    console.error("Error updating assistant:", error);
  }
};

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            background: "linear-gradient(to top, black, #030353)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            position: "relative"
        }}>
            
            <MdKeyboardBackspace 
                style={{
                    position: "absolute",
                    top: "30px",
                    left: "30px",
                    color: "white",
                    cursor: "pointer",
                    width: "25px",
                    height: "25px"
                }} 
                onClick={() => navigate("/customize")}
            />

            <h1 style={{
                color: "white",
                marginBottom: "40px",
                fontSize: "30px",
                textAlign: "center"
            }}>
                Enter Your <span style={{ color: "#bfdbfe" }}>Assistant Name</span>
            </h1>

            <input
                type="text"
                placeholder="eg. shifra"
                required
                value={assistantName}
                onChange={(e) => setAssistantName(e.target.value)}
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "60px",
                    outline: "none",
                    border: "2px solid white",
                    background: "transparent",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    fontSize: "18px"
                }}
            />

            {assistantName && (
                <button
                    disabled={loading}
                    onClick={handleUpdateAssistant}
                    style={{
                        minWidth: "300px",
                        height: "60px",
                        marginTop: "30px",
                        color: "black",
                        fontWeight: "600",
                        cursor: "pointer",
                        backgroundColor: "white",
                        borderRadius: "50px",
                        fontSize: "19px",
                        border: "none"
                    }}
                >
                    {!loading ? "Finally Create Your Assistant" : "Loading..."}
                </button>
            )}

        </div>
    )
}

export default Customize2