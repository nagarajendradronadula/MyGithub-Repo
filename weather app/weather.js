// document.querySelector("form").addEventListener("submit", async function(event){
//     event.preventDefault();
    
//     let city = document.getElementById("city").value;
//     try{
//         const response = await fetch(`http://api.weatherapi.com/v1/current.json?key= 48891b06192b49ac988221104242103&q=${city}`)
//             if(!response.ok){
//                 throw new Error("Network response was not ok");
//             }
//             const data = await response.json();
//             console.log(data);
//             displayWeatherImage(data.current.condition.code);
//     }
//     catch(error){ console.error("Error fetching weather data:", error);}
// });

// function displayWeatherImage(weatherCode) {
//     let weatherImage = document.getElementById("weather-image");
//     switch (weatherCode) {
//         case 1000: // Sunny
//         case 1001:
//         case 1002:
//         case 1003:
//             weatherImage.src = "sunny.jpg";
//             weatherImage.alt = "Sunny";
//             break;
//         case 1063: // Snowy
//         case 1066:
//         case 1069:
//         // Add more snowy conditions as needed
//             weatherImage.src = "snowy.png";
//             weatherImage.alt = "Snowy";
//             break;
//         case 1150: // Rainy
//         case 1153:
//         case 1183:
//         // Add more rainy conditions as needed
//             weatherImage.src = "rainy.png";
//             weatherImage.alt = "Rainy";
//             break;
//         case 1273: // Thunderstorm
//         case 1276:
//         case 1279:
//         // Add more thunderstorm conditions as needed
//             weatherImage.src = "thunderstorm.jpg";
//             weatherImage.alt = "Thunderstorm";
//             break;
//         default:
//             weatherImage.src = "notfound.png"; // Default image if weather condition code is not recognized
//             weatherImage.alt = "Weather Image";
//     }
// }

document.addEventListener("DOMContentLoaded", async function() {
    const city = "YourCityName";
    const apiKey = "YourAPIKey";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display weather icon
        const weatherIconCode = data.current.condition.icon.split("/").pop().split(".")[0];
        document.getElementById("weather-icon").textContent = weatherIconCode;

        // Display temperature
        const temperature = data.current.temp_c;
        document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;

        // Display time
        const observationTime = data.current.last_updated;
        document.getElementById("time").innerText = `Last Updated: ${observationTime}`;

        // Display wind speed
        const windSpeed = data.current.wind_kph;
        document.getElementById("wind-speed").innerText = `Wind Speed: ${windSpeed} km/h`;

        // Display weather image
        const weatherImage = document.getElementById("weather-image");
        const weatherConditionCode = data.current.condition.code;
        const imageSrc = getImageSrc(weatherConditionCode);
        weatherImage.src = imageSrc;
        weatherImage.alt = `Weather condition: ${data.current.condition.text}`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});

function getImageSrc(weatherConditionCode) {
    switch (weatherConditionCode) {
        case 1000: // Sunny
        case 1001:
        case 1002:
        case 1003:
            return "sunny.jpg";
        case 1063: // Snowy
        case 1066:
        case 1069:
            return "snowy.jpg";
        case 1150: // Rainy
        case 1153:
        case 1183:
            return "rainy.jpg";
        case 1273: // Thunderstorm
        case 1276:
        case 1279:
            return "thunderstorm.jpg";
        default:
            return "default.jpg"; // Default image if weather condition code is not recognized
    }
}