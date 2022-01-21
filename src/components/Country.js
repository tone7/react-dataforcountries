import React from 'react'
import axios from "axios";
import { useEffect } from "react";

const Country = ({ country, weather, setWeather }) => {

    const hookWeather = () => {
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${country.capital[0]}&aqi=no`)
            .then(response => {
                setWeather(response.data)
        })
    }
    
    useEffect(hookWeather, [])

    let countryLanguages = []

    Object.keys(country.languages).forEach((key) => {
        countryLanguages.push(country.languages[key])
    })

    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>{(country.capital) ? "capital " + country.capital[0] : "No capital"}</div>
            <div>{(country.population) ? "population " + country.population : "No population"}</div>
            <h3>languages</h3>
            <div>{(country.languages) && 
                <ul>
                    {countryLanguages.map(language => <li key={language}>{language}</li>)}
                </ul>
                }
            </div>
            <div>
                <img alt="Flag" src={country.flags.png} width="10%" height="10%"/>
            </div>
            {(weather.length !== 0) && (
                <div>
                    <h3>Weather in {country.capital[0]}</h3>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <h4>temperature:</h4> 
                        <div>{weather.current.temp_c} °C</div>
                    </div>
                    <img alt={weather.current.condition.text} src={weather.current.condition.icon}/>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <h4>wind:</h4> 
                        <div>{weather.current.wind_kph} kph direction {weather.current.wind_dir}</div>
                    </div>
                </div>)}
        </div>
    )
}

export default Country