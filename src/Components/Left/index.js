import React, { useState } from 'react';
import dayjs from "dayjs";
import  {UseWeatherAppContext} from '../../Context/Context';
const LeftComponents = ()=>{
    const WEEKDAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    const {state:{city,current}} = UseWeatherAppContext();
    const [faren, setFaren] = useState(false);

    if (!current) return <div>Loading...</div>;
    //console.log('current',city)
    const weekdayIndex = dayjs.unix(current.dt).day();
    return (
        <>
            <div className='leftWrap'>
                <button style={{borderRadius: "1rem", width:"92%", marginTop: "1rem"}} onClick={() => setFaren(!faren)}>{faren ? `Celsius` : `Farenheit`}</button>
                <div className='dateWrap'>
                    <h2>{WEEKDAYS[weekdayIndex]}</h2>
                    <span className="dateDay">
                        {dayjs.unix(current.dt).format("DD MMM YYYY")}
                    </span>
                    <span className="locationName">{city.city} - {city.admin_name} - {city.country}</span>
                </div>
                <div className="weatherContainer">
                    <img
                    className="weatherIcon" alt="myit"
                    src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                    />
                    <h1 className="weatherTemp">{faren ? `${Math.round(current.temp.max * 9 / 5 + 32)}°F` : `${Math.round(current.temp.max)}°C`}</h1>
                    <h1 className="weatherTemp">{faren ? `${Math.round(current.temp.min * 9 / 5 + 32)}°F` : `${Math.round(current.temp.min)}°C`}</h1>

                    <h3 className="weatherDesc">{current.weather[0].main}</h3>
                </div>
            </div>
        </>
    )
}

export default LeftComponents;