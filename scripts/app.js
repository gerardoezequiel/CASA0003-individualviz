mapboxgl.accessToken =
  "pk.eyJ1IjoiZWZhY3VuZG9hcmdhbmEiLCJhIjoiY2p3em8wNzkzMHV0eDN6cG9xMDkyY3MweCJ9.BFwFTr19FLGdPHqxA8qkiQ";

// Create a map object with UCL coordinates as the center
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/geraezemc/ckhif49jm2l3x19ot4hmqsvz5",
  attributionControl: true,
  center: [-0.133583, 51.524776], // UCL coordinates
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
