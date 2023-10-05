import {MAPBOX_API_TOKEN, WEATHER_MAP_KEY} from "./keys-module.js"

let accessToken = MAPBOX_API_TOKEN
mapboxgl.accessToken = accessToken;

// Initialize the Mapbox Map.
let map = new mapboxgl.Map({
    container: "myMap", // container ID
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-98.489615, 29.426827], // starting position
    zoom: 7, // starting zoom
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.489615, 29.426827])
    .addTo(map);

// Function to handle marker drag end event. Called when marker is moved and released.
function onDragEnd() {
    const lngLat = marker.getLngLat();
    console.log(lngLat)
    getWeather(lngLat.lat, lngLat.lng)

    map.flyTo({
        center: lngLat,
        essential: true,
        zoom: 8
    })

}

// Function to display weather data.
function getWeather(lat, lng) {
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: WEATHER_MAP_KEY,
        lat: lat,
        lon: lng,
        units: 'imperial',
        exclude: 'minutely,hourly',
    }).done(function weatherData(data) {
        // console.log(data);

        // Empty HTML string to hold the weather information.
        let html = "";

        for (let i = 0; i < data.daily.length - 3; i++) {
            let weekDay = new Date(data.daily[i].dt * 1000);

            html += `
                    <ul>
                        <h2>${new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(weekDay)}</h2>
                        <div><img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png"/></div>
                        <div style="text">Conditions</div>
                        <li>Temperature High  ${data.daily[i].temp.max.toFixed(0)}°F</li>
                         <li>Temperature Low  ${data.daily[i].temp.min.toFixed(0)}°F</li>
                        <li>Description: ${data.daily[i].weather[0].description}</li>
                        <li>Humidity: ${data.daily[i].humidity}%</li>
                        <li>Wind Speed: ${data.daily[i].wind_speed}</li>
                    </ul>
                `;
        }

        console.log(data);
        $('.card').html(html);

        marker.setLngLat(data.lon, data.lat)

    }).fail(function (error) {
        console.log(error);
    });

}

// Initial weather call for the default location
getWeather()


// Add Mapbox Geocoder control to the map for location search by name or address
map.addControl (
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
    );


// Add a dragend event listener to the marker.
marker.on('dragend', onDragEnd);


// Add a move-end event listener to the map to update weather data on map movement.
map.on('moveend', () => {
    let coordinates = map.getCenter();
    // console.log(coordinates);


    // Update weather data based on the new map center coordinates
    getWeather(coordinates.lat, coordinates.lng)
});
