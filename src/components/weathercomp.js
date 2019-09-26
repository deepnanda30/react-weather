import React from "react";
import "./wstyle.css";
const Weather = (props) => {
	
	return (
		 <div className="maincon">
		
		 {props.city && props.country && <h2 className="py-3 con" >{props.city},{props.country}</h2>}
		
		 <i className= {`wi ${props.weatherIcon} display-1 icon_s`}/>
		 <br />
		 {props.temperature && <h2 className="py-2">{props.temperature}°C</h2>}
    
		 
	     {props.temperature_min && props.temperature_max &&
          		<h3> 
				<span className="px-4 ">{props.temperature_min}°C</span>
		 
	            <span className="px-4 ">{props.temperature_max}°C</span>
				</h3>
				}	
		 
		 {props.description && <h3 className="py-3">{props.description}</h3>}
		 
		 {props.humidity && <h4>Humidity(%): {props.humidity}</h4>}
		 
	     {props.error && <p>{props.error}</p>}
		 
	   
		 </div>
		 );
}
 export default Weather;