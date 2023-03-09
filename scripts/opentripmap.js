const apiKey = "5ae2e3f221c38a28845f05b6ed0662748f2fdf24cede18cf28fcee8a";

export const addOpenTripLayer = async (map) => {
  const kindsUrl = `https://api.opentripmap.com/0.1/en/places/kinds?apikey=${apiKey}`;
  const response = await fetch(kindsUrl);
  const kinds = await response.json();

  // Group kinds into categories
  const categories = {
    Living: ["accommodations"],
    Commerce: ["tourist_facilities"],
    Nature: ["natural"],
    Entertainment: ["sport", "cultural"],
  };

  // Add a layer for each category
  Object.entries(categories).forEach(([category, categoryKinds]) => {
    const kindQueryString = categoryKinds
      .map((kind) => `kinds=${kind}`)
      .join(",");
    const sourceId = `opentripmap.${category.toLowerCase()}`;
    const tileUrl = `https://api.opentripmap.com/0.1/en/tiles/pois/{z}/{x}/{y}.pbf?${kindQueryString}&rate=3&apikey=${apiKey}`;

    map.addSource(sourceId, {
      type: "vector",
      attribution:
        '<a href="https://opentripmap.io" target="_blank">© OpenTripMap</a>',
      bounds: [-180, -85.0511, 180, 85.0511],
      minzoom: 6,
      maxzoom: 20,
      scheme: "xyz",
      tiles: [tileUrl],
    });

    map.addLayer(
      {
        id: category,
        type: "symbol",
        source: sourceId,
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
  });
};
