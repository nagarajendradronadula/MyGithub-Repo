const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener('click', () => {
    const APIKey = '48fdf5f5dc405e74e69c423a1bd34af7';
    const city = document.querySelector(".search-box input").value;

    if(city == '')
        return ;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch(json.weaather[0].main){
                case 'Clear':
                    image.src = 'clear.png';
                    break;

                case 'Rain':
                    image.src = 'rain.png';
                    break;

                case 'Snow':
                    image.src = 'snow.png';
                    break;

                case 'Mist':
                    image.src = 'mist.png';
                    break;
                
            }
        })
})