import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  const sample_img =
    "https://th.bing.com/th/id/OIP.2oQ_2pBZOowIG6NJlnJ2KAHaEK?w=267&h=180&c=7&r=0&o=5&pid=1.7";

  /* let info = {
     city: "Delhi",
     feelsLike: 25.98,
     humidity: 83,
     temp: 25.23,
     tempMax: 25.73,
     tempMin: 25.23,
     weather: "haze",
   }; */

   const HOT_URL = "https://wallpaperaccess.com/full/5740986.jpg";
   const COLD_URL = "https://th.bing.com/th/id/R.53230331acf80cb36ebcca6a3d361fad?rik=NH1XHRSqo5COvA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f03%2f15%2f107309-nature-winter-mountains-landscape-snow.jpg&ehk=%2bp%2fFddIHy3JUMRf2TeXkB399tgvnDpX7eGJw8hLhagU%3d&risl=&pid=ImgRaw&r=0";
   const RAIN_URL = "https://wallpapers.com/images/hd/raining-background-5qp991n7cvs8sz8v.jpg";

  return (
    <div className="infoBox">
      <div className="card-container">
        <h3>Weather Info - {info.weather}</h3>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="span">
              <div>Tempertaure = {info.temp}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <div>Min Temp = {info.tempMin}&deg;C</div>
              <div>Max Temp = {info.tempMax}&deg;C</div>
              <br />
              <div>
                <b>
                  The weather can be described as <i>{info.weather.toUpperCase()}</i> and
                  feels like {info.feelsLike}&deg;C
                </b>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
