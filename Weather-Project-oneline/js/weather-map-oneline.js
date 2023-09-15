// "use strict";
//
// //Where should we keep our super-secret keys? Let's try setting up a "keys.js" file to keep locally but tell GitHub to ignore (Gonzo and the crew knocked it out yesterday!)
//
// //Nice - now our keys are locally accessible, but we are avoiding a public exposure on GitHub of our super secret keys
//
// // OpenWeatherAPI
//
// //Has three "hallways" (paths) we can talk to once we have an account:
//
// // 29.424349, and the longitude is -98.491142. San Antonio, TX
//
// //"Current Weather" [https://openweathermap.org/current]
// const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`
//
// // Other information we need:
// // `lat=${lat}&$lon={lon}&appid=${API key}`;
//
// //My house lat/long: 29.510358642924487, -98.64660526616521
//
// //Parent's house lat/long: 29.51, -98.65
// //Let's see what the complete URL looks like:
//do the 5day and find one of the examples on git hub to work and go over
// //console.log(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_MAP_KEY}`);
//
// // $.get(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_MAP_KEY}&units=imperial`)
// //     .done((data) => console.log(data)
// //     )
//
// // Oooo - we looked up the built-in Geocoder - let's get some weather data for a city we want to travel to in the US!
//
// // Nashville
//
// //console.log(BASE_CURRENT_WEATHER_URL + `q=Nashville,TN,USA&appid=${WEATHER_MAP_KEY}&units=imperial`);
// //
//
//
// // HOW - do I get this weather into the DOM?
//
// // $.get(BASE_CURRENT_WEATHER_URL + `q=San Antonio,TX,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => console.log(data))
// $.get(BASE_CURRENT_WEATHER_URL + `q=Anaheim,CA,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
//     // // current temp:
//     // console.log(data.main.temp.toFixed(0));
//     // // humidity:
//     // console.log(data.main.humidity);
//     // // city search result name:
//     // console.log(data.name);
//     // // Description of weather [e.g., 'overcast']
//     // console.log(data.weather[0].description);
//
//     let html = `
//     <div>City Searched: ${data.name}</div>
//     <div>Current Temp: ${data.main.temp.toFixed(0)}</div>
//     <div>Current Humidity: ${data.main.humidity}</div>
//     <div>Current conditions: ${data.weather[0].description}</div>
// `
//
//     $("#insert-weather").html(html);
// })

const BASE_CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`
$.get(BASE_CURRENT_WEATHER_URL + `q=Anaheim,CA,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
    let html = `
    <div>City Searched: ${data.name}</div>
    <div>Current Temp: ${data.main.temp.toFixed(0)}</div>
    <div>Current Humidity: ${data.main.humidity}</div>
    <div>Current conditions: ${data.weather[0].description}</div>
`
    // $("#insert-weather").html(html);
})
    $("#btn").on("click", function (e) {
        // e.preventDefault()
        console.log($("#userSearch").val());

        let userInput= $("#userSearch").val()
        $.get(BASE_CURRENT_WEATHER_URL + `q=${userInput}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
            let html = `
    <div>City Searched: ${data.name}</div>
    <div>Current Temp: ${data.main.temp.toFixed(0)}</div>
    <div>Current Humidity: ${data.main.humidity}</div>
    <div>Current conditions: ${data.weather[0].description}</div>
`
            $("#insert-weather").html(html);
        })

    })

$.get(BASE_CURRENT_WEATHER_URL + `q=${userInput}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data) => {
    let html = `
    <div>City Searched: ${data.name}</div>
    <div>Current Temp: ${data.main.temp.toFixed(0)}</div>
    <div>Current Humidity: ${data.main.humidity}</div>
    <div>Current conditions: ${data.weather[0].description}</div>
`



// ----------------------------
MapboxSearchBox
    const search = new MapboxSearchBox();
    search.accessToken = '<your access token here>';
    map.addControl(search);

<mapbox-search-box
    access-token="<your access token here>"
    proximity="0,0"
        >
        </mapbox-search-box>





















//Here's a thing called fetch: ** Wow **; modern way to do AJAX!

// fetch(BASE_CURRENT_WEATHER_URL + `lat=${29.51}&lon=${-98.65}&appid=${WEATHER_KEY}`)
//     .then((response) => response.json())
//     .then((response) => console.log(response))

