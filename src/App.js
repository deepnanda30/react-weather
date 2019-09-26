import React from "react";
import "./weather-icons-master/css/weather-icons.css";
import Titles from "./components/Titles"; 
import Form from "./components/Form"; 
import Weather from "./components/weathercomp"; 



const API_KEY= "6484fa9baac5f31bfb848c91e34e351d";
class App extends React.Component{
	constructor() {
     super();
	 this.state={
		 temperature :undefined,
		 temperature_min :undefined,
		 temperature_max :undefined,
		 city :undefined,
		 country :undefined,
		 humidity :undefined,
		 description :undefined,
		 error :undefined,
		 icon:undefined,

	 };
	 this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };		 
	}
	 get_WeatherIcon(icons, rangeId) {
      switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
	 getWeather= async(e) => {
  	 e.preventDefault();
	 const city = e.target.elements.city.value;
	 const country  = e.target.elements.country.value;
	 const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
	 const data = await api_call.json();
	 if(city && country){
	 console.log(data);	 
	 this.setState({ 
	  temperature: data.main.temp,
	  temperature_min :data.main.temp_min,
	  temperature_max :data.main.temp_max,
	  city: data.name,
	  country: data.sys.country,
	  humidity: data.main.humidity,
	  description: data.weather[0].description,

	  error: ""
	 }); 
	this.get_WeatherIcon(this.weatherIcon, data.weather[0].id);

      console.log(data);
   }else{
      this.setState({ 
	  temperature: undefined,
	  temperature_min :undefined,
	  temperature_max :undefined,
	  city: undefined,
	  country: undefined,
	  humidity: undefined,
	  description: undefined,
	  icon:undefined,
	  error: "Please enter the values"
	 }); 
   
   } 
  }

	 render(){
		return( 
     <div className="main_container" >             	 
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">               
				<Titles />
                </div>
                <div className="col-md-7 form-container">
				  
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
					weatherIcon={this.state.icon}
					temperature_min={this.state.temperature_min}
					temperature_max={this.state.temperature_max}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}					
                    error={this.state.error}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
   
	
		); 	
	} 
};


export default App;  