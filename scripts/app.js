import { addIsoChrone } from "./isochrone.js";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWZhY3VuZG9hcmdhbmEiLCJhIjoiY2p3em8wNzkzMHV0eDN6cG9xMDkyY3MweCJ9.BFwFTr19FLGdPHqxA8qkiQ";

// We want the coordinates of the user
// The function returns a promise, because we want to resolve the coordinates
// We call the navigator.geolocation.getCurrentPosition() method
// If the user allows us to get the coordinates, we resolve the promise with the coordinates
// If the user doesn't allow us to get the coordinates, we reject the promise *

const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve([position.coords.longitude, position.coords.latitude]),
      (error) => reject(error)
    );
  });
};

// We add a DOMContentLoaded event listener to our window object. This event listener will be called when the DOM content has been loaded.
window.addEventListener("DOMContentLoaded", async () => {
  // get coordinates of the user
  const [longitude, latitude] = await getLocation(); // We use the async await to get the coordinates of the user.
  // Create a map object with UCL coordinates as the center
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/geraezemc/ckhif49jm2l3x19ot4hmqsvz5", // style  URL style created by Gerardo Ezequiel with love
    attributionControl: true, // show attribution
    center: [longitude, latitude], // UCL coordinates
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

  map.addControl(directions, "bottom-left");

  // Add a marker to the map
  const marker = new mapboxgl.Marker({
    color: "#f3a64f",
    draggable: false,
  })
    .setLngLat([longitude, latitude])
    .addTo(map);

  //Isochrone API Mapbox

  const params = document.getElementById("params");

  // Create variables to use in getIso()
  const urlBase = "https://api.mapbox.com/isochrone/v1/mapbox/";
  let profile = "walking";
  let minutes = 15;

  //Create a function that sets up the Isochrone API query then makes a call
  const getIso = async () => {
    const query = `${urlBase}${profile}/${longitude},${latitude}?contours_minutes=${minutes}&polygons=true&access_token=${mapboxgl.accessToken}`;
    const response = await fetch(query);
    const data = await response.json();
    map.getSource("iso").setData(data);
  };
  //If the user click in the buttom the value (html) it's passed to the query
  const onChangeParams = async (event) => {
    if (event.target.name === "profile") {
      profile = event.target.value;
      await getIso();
    } else if (event.target.name === "duration") {
      minutes = event.target.value;
      await getIso();
    }
  };

  // When a user changes the value of profile or duration by clicking a button, change the parameter's value and make the API query again

  params.addEventListener("change", onChangeParams);

  map.on("load", async () => {
    await addIsoChrone({ map, marker, getIso, longitude, latitude });
    directions.setOrigin([longitude, latitude]);
  });

  //Adding the direction controller with IP direction as origin
  const directions = new MapboxDirections({
    unit: "metric",
    profile: "mapbox/walking",
    setOrigin: [longitude, latitude],
    alternatives: true,
    accessToken: mapboxgl.accessToken,
  });
  directions.on("profile", async (event) => {
    const transportMethod = event.profile;
    const directionMethod = transportMethod.split("/").pop();
    profile = directionMethod;
    await getIso();
  });
  map.addControl(directions, "bottom-left");

  //Removing the driving and driving traffic buttom
  document
    .querySelector('label[for="mapbox-directions-profile-driving-traffic"]')
    .remove();
  document
    .querySelector('label[for="mapbox-directions-profile-driving"]')
    .remove();
}); // end of window onload
