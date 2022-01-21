import React from 'react'

const Country = ({country}) => {

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
        </div>
    )
}

export default Country