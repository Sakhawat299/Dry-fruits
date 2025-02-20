import React from 'react'
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import Navabar from '../components/Navabar/Navabar';

const Layout = () => {
  return (
    <div
        style={{
        
       
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
           
            display: "flex",
            flexDirection: "row",
         
          }}
        >
          <Navabar />
          
        </div>
        <div  >
        
          <Outlet />
         
        </div>
      </div>
    );
  
}

export default Layout