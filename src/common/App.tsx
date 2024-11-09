import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {useUserLocation} from "./hook/LocationHook";

function App() {
  // const { location, error }  = useUserLocation();

  return (
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
  );
}

export default App;
