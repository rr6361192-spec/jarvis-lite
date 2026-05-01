import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const userDataContext = createContext();

function UserContextProvider({ children }) {  
  const serverUrl = "http://localhost:4000";
  const [userData, setUserData] = useState(null);
  const [frontendImage, setFrontendImage] = useState(null);
  const [backendImage, setBackendImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/current`, { withCredentials: true });
      setUserData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGeminiResponse = async (input) => {
  try {
    console.log(input)
    const response = await axios.post(`${serverUrl}/gemini/ask`, { prompt: input });
    return response.data; // ✅ return the actual AI data
  } catch (err) {
    console.error("Gemini API error:", err);
    return { response: "Sorry, I could not get a response." };
  }
}
  useEffect(() => {
    handleCurrentUser();
  }, []);

  const value = {
    serverUrl,
    userData,
    setUserData,
    backendImage,
    setBackendImage,
    frontendImage,
    setFrontendImage,
    selectedImage,
    setSelectedImage,
    getGeminiResponse
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContextProvider;