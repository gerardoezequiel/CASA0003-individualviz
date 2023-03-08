mapboxgl.accessToken =
  "pk.eyJ1IjoiZWZhY3VuZG9hcmdhbmEiLCJhIjoiY2p3em8wNzkzMHV0eDN6cG9xMDkyY3MweCJ9.BFwFTr19FLGdPHqxA8qkiQ";
let coordinatesUCL = [-0.133583, 51.524776]; // UCL coordinates to start the map and the isochrone

// Create a map object with UCL coordinates as the center
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/geraezemc/ckhif49jm2l3x19ot4hmqsvz5", // style URL style created by Gerardo Ezequiel with love
  attributionControl: true, // show attribution
  center: coordinatesUCL, // UCL coordinates
  zoom: 14,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl());

// Add geolocate control to the map
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  })
);

// Add scale bar control to the map
map.addControl(
  new mapboxgl.ScaleControl({
    maxWidth: 100,
    unit: "metric",
  }),
  "bottom-right"
);

// Add a marker to the map
const marker = new mapboxgl.Marker({
  color: "#000000",
  draggable: true,
})
  .setLngLat(coordinatesUCL)
  .addTo(map);

  