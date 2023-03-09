export const addIsoChrone = async ({ map, getIso }) => {
  map.addSource("iso", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [],
    },
  });
  await getIso();

  map.addLayer(
    {
      id: "Isochrone",
      type: "fill",
      source: "iso",
      // layout: { visibility: 'none' },
      paint: {
        "fill-color": "#f3a64f",
        "fill-opacity": 0.3,
      },
    },
    "poi-label"
  );

  return map.getSource("iso");
};
