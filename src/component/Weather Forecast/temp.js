import React, { useEffect } from 'react'

import "./style.css"
import Weathercard from './weathercard'

const Temp = () => {
    const [SearchValue, setSearchValue] = React.useState("Varanasi")
    const [Tempinfo, setTempinfo] = React.useState({})
    

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${SearchValue}&units=metric&appid=6a8489f725255f4116902ec82e348f68`;
            const res = await fetch(url); {/* returns promise means data will be fulfilled or rejected */ }
            const data = await res.json()
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0]
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,



            }
            setTempinfo(myNewWeatherInfo)


        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        getWeatherInfo(); {/* its for the very first time set to varanasi get called referenced to onClick={getWeatherInfo} */ }
    }, [])
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="Search"
                        autoFocus
                        id="search"
                        className="searchTerm"

                        // data for what user typing 
                        value={SearchValue}
                        onChange={(e) => setSearchValue(e.target.value)} />                                           {/*it rquires some state value */}



                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>


                </div>
            </div>
             {/* temp card  */}

             <Weathercard {...Tempinfo}/>



        </>
    )
}

export default Temp
