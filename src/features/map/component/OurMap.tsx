import './Map.css'

import React, {useState} from "react";
import {Map, Marker} from "@vis.gl/react-google-maps";


export const OurMap = () => {

  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  return (
      <div className="map-container">
        <Map
            style={{borderRadius: "20px"}}
            defaultZoom={13}
            defaultCenter={markerLocation}
            gestureHandling={"greedy"}
            disableDefaultUI
        >
          <Marker position={markerLocation}/>
        </Map>
      </div>
  );

}