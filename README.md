Author: Gerardo Ezequiel Martín Carreño
MRes Urban Spatial Science
University College London

# Chrono-urbanism: Spatial-temporal visualisation of essential functions

The 15-minute city model has gained attention in urban planning discourse as a promising approach to developing livable, sustainable, and equitable urban environments. The model is based on the concept of a polycentric city, where density is made pleasant, proximity is vibrant, and social intensity is real. A key element of this model, according to Carlos Moreno, is "chrono-urbanism," or a refocusing of interest on the value of time rather than the cost of time (Knap et al., 2023; Moreno et al., 2021) introducing the concept of the 15-minute city as a way to ensure that urban residents can fulfil six essential functions within a 15-minute walk or bike ride of their homes: living, working, commerce, healthcare, education, and entertainment. The framework of this model has four components: density, proximity, diversity, and digitisation.

## Visualisation

This visualisation aims to display points of interest and essential functions closest to the user's location within walking and cycling distances of 5, 15, 30, and 60 minutes. Using data provided by the user's device, the visualisation will present a clear picture of the area around the user, allowing them to locate and explore nearby points of interest and services quickly.

To accomplish this objective, an exhaustive process was undertaken to determine the essential functions necessary to promote livability and sustainability in urban environments. As a result of careful consideration and analysis, four categories were identified: Living, Commerce, Nature, and Entertainment. These categories were developed to provide a comprehensive framework for understanding the needs and desires of urban residents and to guide the development of policies and programs that prioritize accessibility, diversity, and quality of life.

## Project Description

This project uses Mapbox's Isochrone API to create a map that shows areas reachable within a certain amount of time from a given location. The user's location is automatically determined using the browser's geolocation API. The project allows the user to change the mode of transportation and the duration of the isochrone by clicking on the corresponding buttons.

The map also includes an OpenTripMap layer that shows points of interest (POIs), such as restaurants, museums, and hotels in the surrounding area. Users can click on these POIs to see more information about them in an OTM Popup.

The project uses Mapbox's NavigationControl, FullscreenControl, GeolocateControl, and ScaleControl to enhance the user experience. Additionally, the project includes a MapboxDirections control that allows the user to get directions from their current location to any other place on the map.

The code is written in JavaScript, and the necessary dependencies are imported using ES6 module syntax. The project uses async/await to ensure that the required data is loaded before it is used. The project is hosted on a web page and can be accessed by running the code in a web browser.

## Libraries

- Mapbox GL JS: This JavaScript library is used for building interactive maps. The library is built on top of WebGL, which allows for high-performance rendering of large amounts of map data. It includes various features such as zooming, panning, rotating the map, adding markers and popups, and controlling the user's geolocation. The library also integrates the isochrone API data into the map.

- Mapbox Directions API: This API allows the user to get turn-by-turn directions from their current location to any other place on the map. The API is used to create a MapboxDirections control that appears on the bottom-left corner of the map.

- Mapbox Isochrone API: This API allows the user to create an isochrone map that displays areas that can be reached from a given location within a certain amount of time. The API uses the user's current location as the centre point and calculates the reachable areas based on the mode of transportation and the duration specified by the user. The isochrone API is used to create the isochrone layer on the map.

- OpenTripMap API: This is an open-source API that displays various points of interest (POIs), such as restaurants, museums, and hotels. The project uses the OpenTripMap layer to show these POIs on the map.

- MapboxGeocoder: This control allows the user to search for addresses, landmarks, and points of interest. The control is integrated into the top-right corner of the map.

- Mapbox GL Controls: These pre-built controls can be added to the map to enhance the user experience. The project uses NavigationControl, FullscreenControl, GeolocateControl, and ScaleControl. The NavigationControl adds zooming and panning buttons to the map, while the FullscreenControl adds a button that allows the user to view the map in fullscreen mode. The GeolocateControl adds a button that will enable the user to centre the map on their current location, and the ScaleControl adds a scale bar to the bottom-right corner of the map.

Regarding the API data, the isochrone API calculates the reachable areas from the user's current location based on the mode of transportation and the duration specified by the user. The API returns a GeoJSON object that includes a set of polygons that represent the reachable areas. The project then uses the Mapbox GL JS library to display these polygons on the map.

The OpenTripMap layer shows various POIs in the surrounding area based on the user's location. The project uses the Mapbox GL JS library to display these POIs on the map. When the user clicks on a POI, an OTM Popup shows more information about the POI, such as its name, photo, and description.

## TODO

###### (or what I’ve tried without success):

- [ ] Use Turf to filter the query to the API and find the centre of the bounding box of the isochrone. This would allow displaying only the points of interest within the isochrone area.
- [ ] Implement a new call to the isochrone API each time the marker is moved to keep the visualisation up-to-date with the user's location.
- [ ] Add layers to the map based on the essential functions described by Carlos Moreno, such as living, working, commerce, healthcare, education and entertainment, with an interactive filter.
- [ ] Use Turf to filter the query to the API and find the centre of the bounding box of the isochrone. This would allow displaying only the points of interest within the isochrone area.
- [ ] Implement a new call to the isochrone API each time the marker is moved to keep the visualisation up-to-date with the user's location. This ensures that the user is presented with the most accurate and relevant information about nearby points of interest and services.
- [ ] Explore adding layers to the map based on the categories described by Carlos Moreno, such as "essential services," "culture and leisure," and "food and drink." This would provide users with a way to filter the points of interest and focus on those that are most relevant to them.

- [ ] Improve the visual experience; the colour of the isochrone could be changed depending on the number of functional activities nearby. For example, the isochrone could be green if all functional activities are within a 5-minute walk. The isochrone could be yellow if there are 3 to 4 functional activities within a 15-minute walk. The isochrone could be red if there are at most three functional activities within a 30-minute walk.

- [ ] Display the average rating for each category of points of interest. A side panel could show the essential functions with the highest rating, allowing users to quickly identify the most highly-rated places in the area.

- [ ] To better understand the area's diversity and richness, a for-each loop could be used to iterate through each point of interest by category in the viewport. An isochrone could be generated for each point of interest, then merged per category and intersected to identify the areas with the most diverse and rich activities. This would provide users with a more comprehensive view of the local area and help them plan their exploration accordingly.

## Bibliography

Knap, E., Ulak, M. B., Geurs, K. T., Mulders, A., & van der Drift, S. (2023). A composite X-minute city cycling accessibility metric and its role in assessing spatial and socioeconomic inequalities – A case study in Utrecht, the Netherlands. Journal of Urban Mobility, 3, 100043. https://doi.org/10.1016/j.urbmob.2022.100043

Moreno, C., Allam, Z., Chabaud, D., Gall, C., & Pratlong, F. (2021). Introducing the “15-Minute City”: Sustainability, Resilience and Place Identity in Future Post-Pandemic Cities. Smart Cities, 4(1), Article 1. https://doi.org/10.3390/smartcities4010006
