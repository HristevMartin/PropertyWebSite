import "./App.css";
import Footer from "./Footer/Footer.js";
import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import EstateAgent from "./HomePage/HomePage";
import Header2 from "./Header/Header";
import Listing from "./Listing/Listing";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import Test from "./Test/Test";

function App() {


  return (
    <div className="Container">
      <Header2 />
      <div className="App">
        <Routes>
          <Route path="/" element={<EstateAgent />} />
          <Route path="/test" element={<Listing />}/>
          <Route path="/property/detail/:id" element={<PropertyDetail />}/>
          <Route path="/test2" element={<Test />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
