import './Map.css'

import React, {useContext, useEffect, useState} from "react";
import {Map, Marker} from "@vis.gl/react-google-maps";
import useUserLocation from "../../../common/hook/LocationHook";
import {useGeoLocation} from "@custom-react-hooks/use-geo-location";
import {LocationContext} from "../context/LocationContext";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


export const OurMap = () => {

  // const { getLocation, location, error }  = useUserLocation();
  const { loading, coordinates, error, isWatching } = useGeoLocation();



  const {markerLocation, setMarkerLocation} = useContext(LocationContext);


  const [selectedShop, setSelectedShop] = useState()

  function handleOnmarkerClick() {

  }


  return (
      <>
      <div className="map-container">
        <Map
            style={{borderRadius: "20px"}}
            defaultZoom={13}
            defaultCenter={markerLocation}
            gestureHandling={"greedy"}
            disableDefaultUI
        >
          <Marker position={markerLocation}/>


          <Marker position={{
            lat : 48.751211,
            lng : 21.243766,
          }}/>

        </Map>
      </div>


      {/*<Dialog open={addBucketDialog} onClose={handleCloseAddBucket}>*/}
      {/*  <DialogTitle>Add new cart</DialogTitle>*/}
      {/*  <DialogContent>*/}
      {/*    <TextField*/}
      {/*        label="Cart name"*/}
      {/*        fullWidth*/}
      {/*        value={addBucketName}*/}
      {/*        onChange={(e) => {*/}
      {/*          setAddBucketName(e.target.value)*/}
      {/*        }}*/}
      {/*        sx={{ mb: 2 }}*/}
      {/*    />*/}


      {/*  </DialogContent>*/}
      {/*  <DialogActions>*/}
      {/*    <Button onClick={handleCloseAddBucket} color="primary">*/}
      {/*      CLose*/}
      {/*    </Button>*/}
      {/*    /!*<Button onClick={handleSaveProduct} color="primary">*!/*/}
      {/*    <Button color="primary" onClick={handleBucketAdding}>*/}
      {/*    </Button>*/}
      {/*  </DialogActions>*/}
      {/*</Dialog>*/}
      </>


  );

}

