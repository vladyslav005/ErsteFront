import './Map.css'

import React, {useState} from "react";
import {Map, Marker} from "@vis.gl/react-google-maps";
import useUserLocation from "../../../common/hook/LocationHook";


export const OurMap = () => {

  const {location, error} = useUserLocation();


  const [markerLocation, setMarkerLocation] = useState({
    lat: location.latitude ? location.latitude : 0,
    lng: location.longitude ? location.longitude : 0,
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