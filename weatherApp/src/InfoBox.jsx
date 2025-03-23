import '@fontsource/roboto/300.css'; 
import './InfoBox.css'
export default function InfoBox ({name=null , AQI=null , Status = null ,Temp=null , min=null , max=null , COR =0 , Visibility=null , Sunrise=null , Sunset=null , Humidiy=null , 
    Pressure=null , realFeel=null , UV=null , WindDirection="none"
 }){
    return (<>
    <div className='InfoBox'>
        <div className="topHeader">Current Weather Status of {name} </div>
        <div className="Heroes_Section flex">
            <h2 >{Temp}F</h2>    
            <div className='oneLine'>
                <p>{Status}</p>
                <p>{min}/{max} </p>
            </div>
        </div>
        <div className="InfoCard">
            <li className='oneLine'>
                <span>AQI </span>
                <span>{AQI}</span> </li>
            <li className='oneLine'>
                <span>Chances of Rain : </span> 
                <span>{COR} %</span></li>
            <li className='oneLine'>
                <span>Visibility</span>
                <span> {Visibility} </span> </li>
            <li className='oneLine'>
                <span>Sunrise </span> 
                <span>{Sunrise}</span>
            </li>
            <li className='oneLine'>
                <span>Sunset  </span> 
                <span>{Sunset}</span> 
            </li>
            
        </div>
        <div className="InfoCard">
            <li className='oneLine'>
                <span>Humidity </span>
                <span>{Humidiy}</span> </li>
            <li className='oneLine'>
                <span>Pressure </span> 
                <span>{Pressure}</span></li>
            <li className='oneLine'>
                <span>Real Feel </span>
                <span> {realFeel} </span> </li>
            <li className='oneLine'>
                <span>UV </span> 
                <span>{UV}</span>
            </li>
            <li className='oneLine'>
                <span>Wind Direction</span> 
                <span>{WindDirection}</span> 
            </li>
            
        </div>

    </div>
    </>)
}


// visibility , sunrise sunset  , AQI , Chances of Rain  , Temperature , weather Status e.g clear misty ,  
// Wind direction  , pressure , Real Feel , UV , Humidity