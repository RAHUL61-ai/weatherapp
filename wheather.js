const apikey ="5bee89b4cf6c4d7f6159e779808c725f";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const wheatherIcon=document.querySelector(".weather-icon");
async function checkWeather(city){

    const response = await fetch(apiurl +city+ `&appid=${ apikey }`);

if(response.status == 404){

    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display="none";
}else{


    var data=await response.json();    

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML =data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML =data.wind.speed+ "km/h";



    if(data.weather[0].main=="Clouds"){

        wheatherIcon.src="images/clouds.png";
        }
    
    
        else if(data.weather[0].main=="Clear"){
            wheatherIcon.src="images/clear.png";
    
        }
    
    
        else if(data.weather[0].main=="Rain"){
            wheatherIcon.src="images/rain.png";
        }
        
        else if(data.weather[0].main=="Drizzle"){
            wheatherIcon.src ="images/drizzle.png";
    
        }
        
        else if(data.weather[0].main=="Mist"){
            wheatherIcon.src="images/mist.png";
        }
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display ="none";
}

    

    

   
}
searchbtn.addEventListener("click",()=>{

    checkWeather(searchbox.value);

});