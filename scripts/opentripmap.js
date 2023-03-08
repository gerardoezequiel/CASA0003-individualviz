const apiKey = "5ae2e3f221c38a28845f05b6ed0662748f2fdf24cede18cf28fcee8a";
export const addOpenTripLayer = (map) => {
  //Stylization

  //Add pois layer to the map
  map.addSource("opentripmap.pois", {
    type: "vector",
    attribution:
      '<a href="https://opentripmap.io" target="_blank">© OpenTripMap</a>',
    bounds: [-180, -85.0511, 180, 85.0511],
    minzoom: 6,
    maxzoom: 20,
    scheme: "xyz",
    tiles: [
      "https://api.opentripmap.com/0.1/en/tiles/pois/{z}/{x}/{y}.pbf?kinds=interesting_places,tourist_facilities,sport&rate=3&apikey=" +
        apiKey,
    ],
  });

  map.addLayer(
    {
      id: "Interesting places",
      type: "symbol",
      source: "opentripmap.pois",
      layout: {
        "icon-image": "circle-15",
        "icon-size": 0.5,
      },
      "source-layer": "pois",
      minzoom: 12,
      maxzoom: 20,
    },
    "airport-label"
  );
};
