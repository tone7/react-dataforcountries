import React from "react";

const Data = ({ data, filter }) => {

    const regex = new RegExp(`^.*${filter.toLowerCase()}.*$`)
    const filteredData = data.filter(country => country.name.common.toLowerCase().match(regex))

    let tooMany = false
    let moreThanOne = false
    let onlyOne = false
    let country = null
    let countryLanguages = []

    if(filteredData.length > 10){
        tooMany = true
    } else if(filteredData.length <= 10 && filteredData.length > 1){
        moreThanOne = true
    } else if(filteredData.length === 1){
        onlyOne = true
        country = filteredData[0]
        Object.keys(country.languages).forEach((key) => {
            countryLanguages.push(country.languages[key])
        })
    }

    return (
        <div>
            {(tooMany) && "Too many matches, specify another filter"}
            {(moreThanOne && filteredData.map(country => <div key={country.name.common}>{country.name.common}</div>))}
            {(onlyOne) && 
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
                }   
        </div>
    )
}

export default Data