import React, { useEffect, useState } from 'react';

const WeatherCard = ({ tmpInfo }) => {
    const [weatherState, setweatherState] = useState("");

    const { temp, humidity, pressure, sunrise, country, city, weatherMood, wSpeed } = tmpInfo;
    let date = new Date(sunrise * 1000);

    useEffect(() => {
        switch (weatherMood) {
            case "Clouds": setweatherState("wi-day-cloudy")
                break;
            case "Haze": setweatherState("wi-fog")
                break;
            case "Clear": setweatherState("wi-day-sunny")
                break;
            default: setweatherState("wi-day-sunny")
                break;
        }
    }, [weatherMood])
    

    return (
        <>
            <div className="card">
                <div className="fa_sun">
                    <i className={`fa-sun wi ${weatherState}`}></i>
                </div>

                <div className='info'>
                    <div className='weather_info'>
                        <h1 className='weather'> {temp} &deg;<span>C</span></h1>
                        <div className='city'>
                            <h2>{weatherMood}</h2>
                            <p>{city}, {country}</p>
                        </div>
                    </div>
                    <div className='date'>
                        {new Date().toLocaleString()}
                    </div>
                </div>

                <div className='four_sec'>
                    <div className='two_sided'>
                        <p>
                            <i className={"wi wi-sunrise"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {`${date.getHours()}:${date.getMinutes()} Am`} <br />
                            Sunrise
                        </p>
                    </div>
                    <div className='two_sided'>
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {humidity} <br />
                            Humidity
                        </p>
                    </div>
                    <div className='two_sided'>
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {pressure} <br />
                            Pressure
                        </p>
                    </div>
                    <div className='two_sided'>
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {wSpeed} <br />
                            Speed
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard;