import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { LocationOnIcon } from 'mapbox-gl/dist/mapbox-gl.css';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  return (
    <div className="App">
    <Map
        initialViewState={{
        longitude: -77.03637,
        latitude: 38.89511,
        zoom: 14
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-100} latitude={40} anchor="bottom" >
          {/* <img src="./pin.png" alt="" /> */}
          <LocationOnIcon style={{ fontSize: "40" }} />
        </Marker>
      </Map>
    </div>
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
