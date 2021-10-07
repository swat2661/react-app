import React, { useEffect } from 'react'

const Weathercard = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
}) => {
    const [Weatherstate, setWeatherstate] = React.useState("")
    
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherstate("wi-day-cloudy")

                    break;
                case "Haze":
                    setWeatherstate("wi-fog")

                    break;
                case "Clear":
                    setWeatherstate("wi-day-Sunny")
                    break;
                case "Mist":
                    setWeatherstate("wi-dust")
                    break;
                case "Thunderstorm":
                    setWeatherstate("wi-thunderstorm")
                    break;
                case "Fog":
                    setWeatherstate("wi-fog")
                    break;





                default:
                    setWeatherstate("wi-day-Sunny")
                    break;
            }
        }

    }, [weathermood]);





    // converting sunset seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000)
    let timestr = `${date.getHours()}:${date.getMinutes()}`
    return (
        <>


            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${Weatherstate}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name} {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                {/* our 4 colums section  */}

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {timestr}PM <br />
                                Sunset

                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {humidity}<br />
                                Humidity
                            </p>
                        </div>


                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {pressure}<br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                {speed}<br />
                                Speed
                            </p>
                        </div>
                    </div>




                </div>


            </article>

        </>
    )
}

export default Weathercard
