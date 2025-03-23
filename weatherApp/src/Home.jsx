import './Home.css'
import '@fontsource/roboto/300.css'; 
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function Home (){ 
    const URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_Key = "";

    let[city , setCity] = useState("");

    let [usefulData , setUsefulData ]= useState({
        "lon":"",
        "lat":"",
        "name":null ,
        "AQI":2 ,
        "Status" : "" ,
        "Temp":0 , 
        "min" : 0 ,
        "max" :0,
        "COR" :0 ,
        "Visibility" :0,
        "Sunrise" :0,
        "Sunset" :0,
        "Humidiy" :0, 
        "Pressure" :0, 
        "realFeel" :0, 
        "UV" :0, 
        "WindDirection":0,
    });

    const getData =async (updateUsefulData)=>{
        const currURL = `${URL}q=${city}&appid=${API_Key}`;
        console.log("The Current URL is : " , currURL);
        const jsonData= await fetch(currURL);
        const Data = await jsonData.json();
        setTimeout(() => {
            updateUsefulData(Data);
        }, 1000);
    }
    // to update the Current City Name and Get and parse the Useful Data to Info Card Component
    function updateCurrCity(city){
        setCity(()=>{return city;});
        getData(updateUsefulData);
        
    }
    function updateUsefulData(Data){
        
        console.log("Data Fetched is : " , Data);
       const newData =  {
            "lon":Data.coord.lon,
            "lat":Data.coord.lat,
            "name":Data.name ,
            "AQI":Data.Visibility ,
            "Status" : Data.weather[0].description ,
            "Temp":Data.main.temp , 
            "min" : Data.main.temp_min ,
            "max" :Data.main.temp_max,
            "COR" :Data.rain,
            "Visibility" :Data.Visibility,
            "Sunrise" :Data.sys.sunrise,
            "Sunset" :Data.sys.sunset,
            "Humidiy" :Data.main.Humidity, 
            "Pressure" :Data.main.pressure, 
            "realFeel" :Data.main.feels_like, 
            "UV" :0, 
            "WindDirection":Data.wind.deg,
        };
        console.log("Fetched useful Data is : " , newData);
        setUsefulData({...newData});
    }
    function getFormData(cityName){
        updateCurrCity(cityName);
    }
    return (<>
    <div className="Home">
        <SearchBox callback = {getFormData}></SearchBox>
        <InfoBox name={usefulData.name} AQI={usefulData.AQI} Status={usefulData.Status} Temp={usefulData.Temp} min={usefulData.min} max={usefulData.max} COR={usefulData.COR} Visibility={usefulData.Visibility} Sunrise={usefulData.Sunrise} Sunset={usefulData.Sunset} Humidiy={usefulData.Humidiy} Pressure={usefulData.Pressure} realFeel={usefulData.realFeel} UV={usefulData.UV} WindDirection={usefulData.WindDirection}></InfoBox>
    </div>
    </>)
}
