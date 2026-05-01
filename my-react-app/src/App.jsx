import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";

import React from 'react';
import AuthUI from './kk';
import  { useContext, useState } from 'react'
import Login from './login';
import { userDataContext } from './context/UserContext'
import Home from './Log/page';
import Landing from './Landing/landing';
import Customize2  from './customize2'
import Custom from './custom';

function App() {
  const {userData,setUserData}=useContext(userDataContext)
    return (
     <Routes>
      
      <Route path='/' element={<Home/>}/>
       
  
         <Route path='/jjb' element={<Landing/>}/>
         <Route path='/custom' element={<Custom/>}/>
     </Routes>
    )
}

export default App;