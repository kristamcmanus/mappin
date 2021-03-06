// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import "./App.css";
import axios from 'axios';
import { format } from "timeago.js";
// import { LocationOnIcon } from 'mapbox-gl/dist/mapbox-gl.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  const [pins, setPins] = useState([])
  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getPins()
  }, []);

  return (
    <div className="App">
      <Map
        initialViewState={{
          longitude: -77.036560,
          latitude: 38.897957,
          zoom: 14
        }}
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        mapStyle="mapbox://styles/kmcmanus310/ckzxefk7x000y14nqjbjx360f"
      >
        {pins.map((p) => (
          <>
            <Marker longitude={p.long} latitude={p.lat} anchor="bottom" >
              {/* <img src="./pin.png" alt="" /> */}
              <LocationOnIcon style={{ fontSize: 40, color: "black" }} />
            </Marker>
            <Popup
              longitude={p.long}
              latitude={p.lat}
              anchor="bottom"
            >
              <div className='card'>
                <label>Place</label>
                <h4 className='place'>{p.title}</h4>
                <label>Review</label>
                <p className='desc'>{p.desc}</p>
                <label>Rating</label>
                <div className='stars'>
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                  <StarIcon className='star' />
                </div>
                <label>Information</label>
                <span className='username'>Created by <b>{p.username}</b></span>
                <span className='date'>{format(p.createdAt)}</span>
              </div>
              You are here
            </Popup>
          </>
        ))}
      </Map>
    </div >
  );
}

export default App;

// import { useState } from 'react';
// import ReactMapGL, {Marker} from 'react-map-gl';

// function App() {
//   const [viewport, setViewport] = useState({
//     width: "100vw",
//     height: "100vh",
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8
//   });
//   return (
//     <div className="App">
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
//         onViewportChange={nextViewport => setViewport(nextViewport)}
//       >
//         <Marker
//           latitude={37.78}
//           longitude={-122.41}
//           offsetLeft={-20}
//           offsetTop={-10}
//         >

//           <div>You are here</div>
//         </Marker>
//         </ReactMapGL>
//     </div>
//   );
// }

// export default App;
