import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../pages/MainPage";
import {useUserLocation} from "./hook/LocationHook";
import {OurAppBar} from "../features/appbar/components/OurAppBar";
import {Bucket} from "../features/bucket/component/Bucket";
import {BucketsPage} from "../pages/BucketsPage";
import MenuDrawer from "../features/menudrawer/component/MenuDrawer";

function App() {
  // const { location, error }  = useUserLocation();

  return (
      <>
        <OurAppBar></OurAppBar>
        <MenuDrawer></MenuDrawer>

        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/buckets" element={<BucketsPage/>}/>
        </Routes>
      </>
  );
}

export default App;
