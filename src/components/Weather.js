import search from './Assets/search.png';
import clear from './Assets/clear.png';
import React,{useState} from 'react';
// import rain from './Assets/rain (1).png';
import axios from 'axios';


function Weather() {
  const [city,setCity] = useState([""]);
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'cb75b2b1cc245fcf3533662e33dc4729'; // api key
  
  

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
      console.log("hello world");
      console.log("weather:-" , response.data);
    } catch (error) {
      console.error(error);
    }
  };


    return (
    <div className='container-fluid'>
          <div className='weather-box'>
               <h1 style={{marginTop :"20px",
                           fontWeight: "400",
                           textAlign: "center"}}>Weather In</h1>
                
                <input type='text' placeholder='search you city name...' className='cityInput' value={city} onChange={(e) => setCity(e.target.value)}  />
                <div className='serach-btn' onClick={getWeather}>
                    <img height={"20px"} width={"20px"} src={search} alt='search-ico' style={{marginTop: "6px",marginLeft: "4px"}} />
                </div>

                { weatherData && (
                 <div className='weather-details'>
                          <img src={clear} alt='clear weather' className='img-weather'/>
                          <p  className='temp'> {Math.round(weatherData.main.temp - 273.15)}°C</p>
                          
                          
                             <h2 className='weather-loction'> {weatherData.name} </h2>
                          

                            <div className='element'>
                                    <div className='data'>
                                        <div >
                                            <p style={{color:"black"}}>{weatherData.main.humidity} %</p>
                                        </div>
                                        <div className='humidity-text'>humidity</div>
                                    </div>
                                    <div className='data'>
                                        <div >
                                          <p style={{color:"black"}}>{weatherData.wind.speed} km/h</p>
                                        </div>
                                        <div className='wind-text'>wind</div>
                                    </div>
                            </div>
                  </div> 
                )}
                </div>

          </div>
  )
}

export default Weather;

