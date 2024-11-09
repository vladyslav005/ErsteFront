import React, {createContext, useState} from 'react';


interface LocationContextInterface {

  markerLocation : {
    lat : number;
    lng : number;
  }

  setMarkerLocation : (markerLocation : {
    lat : number;
    lng : number;
  }) => void
}


export const LocationContext = createContext<LocationContextInterface>({
  markerLocation : {
    lat : 48.731211,
    lng : 21.243766,
  },

  setMarkerLocation : (markerLocation : {
    lat : number;
    lng : number;
  }) => {}
})

interface MenuDrawerProviderProps {
  children: React.ReactNode;
}

export const LocationState = (props: MenuDrawerProviderProps) => {
  const [markerLocation, setMarkerLocation] = useState({
    lat : 48.731211,
    lng : 21.243766,
  });

  const contextValue: LocationContextInterface = {
    markerLocation,
    setMarkerLocation
  };

  return (
      <LocationContext.Provider value={contextValue}>
        {props.children}
      </LocationContext.Provider>
  );

}
