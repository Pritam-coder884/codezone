import React from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="box">
          <div className="box-text">
            <div className="box-text-content">
              <h3 style={{color:"white",fontSize:"30px"}}>Explorer</h3>
            </div>
            <div className="box-text-content">
              <h1 style={{color:"#E2A23B",fontSize:"40px"}}>MIDDLE EARTH PROTOCOL</h1>
            </div>
            <div className="box-text-content">
              <p style={{color:"#E9DEC3"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita omnis molestias sapiente accusamus? Sunt repellat atque
                dignissimos ab iste labore.
              </p>
            </div>
            <div className="box-text-content">
              <button style={{backgroundColor:"#E9DEC3",
              padding:"10px",
              border:"none",
              borderRadius:"5px"
            }}>View More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
