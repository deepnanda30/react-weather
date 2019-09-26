import React from "react";
import bgvid from "./bgvid.mp4";
class Titles extends React.Component{
	render(){
		return(
		 <div>
		     <h1 className="title-container_title des w3-animate-top"> THE WEATHER APP</h1> 
			 <video className="videoTag" autoPlay loop muted>
             <source src={bgvid} type='video/mp4' />
             </video>
		     <p className="title-container_subtitle des w3-animate-bottom">All you need to know about today's weather!!!!!! </p>		 
		 </div>
		);				
	}
}; 	
export default Titles;