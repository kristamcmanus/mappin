import * as React from 'react';
import Map, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
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
