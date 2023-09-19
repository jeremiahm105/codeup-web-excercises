
let accessToken = MAPBOX_API_TOKEN
mapboxgl.accessToken = accessToken;
let map = new mapboxgl.Map({
    container: "geoMap", // container ID
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-98.50, 29.40], // starting position
    zoom: 12, // starting zoom
});

//Convert API data response to JS Date Object
// new date (second ^ 1000) formula

// Initial API Call
function getWeather (lat, lng) {
    $.get('https://api.openweathermap.org/data/2.5/onecall', {
        appid: WEATHER_MAP_KEY,
        lat: lat,
        lon: lng,
        units: 'imperial',
        exclude: 'minutely,hourly',
    }).done(function weatherData(data) {
        console.log(data);

        //Current Weather
        // lat={lat}&lon={lon}&exclude={part}&appid={API key}

        //5-Day Forecast Loop

        let html = "";

        for (let i = 0; i < data.daily.length - 3; i++) {
            let weekDay = new Date(data.daily[i].dt * 1000);

            html += `
                <ul>
                    <h3>${new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(weekDay)}</h3>
                    <div><img src="https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png"/></div>
                    <div style="text">Conditions</div>
                    <li>Temperature High  ${data.daily[i].temp.max}°F</li>
                     <li>Temperature Low  ${data.daily[i].temp.min}°F</li>
                    <li>Description: ${data.daily[i].weather[0].description}</li>
                    <li>Humidity: ${data.daily[i].humidity}%</li>
                    <li>Wind Speed: ${data.daily[i].wind_speed}</li>
                </ul>
            `;
        }

        console.log();
        $('.card').html(html);


    }).fail(function (error) {
        console.log(error);
    });

}

getWeather()

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
    );
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.489615, 29.426827])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br/>Latitude: ${lngLat.lat}`;
    // alert(lngLat);
}
marker.on('dragend', onDragEnd);
map.on('moveend', () => {
    let coordinates = map.getCenter();
    // console.log(coordinates);
    getWeather(coordinates.lat, coordinates.lng)
});



