import React from "react";
import Country from "./Country"

const Data = ({ data, filter, setFilter }) => {

    const regex = new RegExp(`^.*${filter.toLowerCase()}.*$`)
    const filteredData = data.filter(country => country.name.common.toLowerCase().match(regex))

    const divStyle = {
        display: "flex",
    }

    return (
        <div>
            {(filteredData.length > 10) && "Too many matches, specify another filter"}
            {(filteredData.length <= 10 && filteredData.length > 1) && filteredData.map(country => 
                <div key={country.name.common} style={divStyle}>
                    {country.name.common} <button onClick={() => setFilter(country.name.common)}>show</button>
                </div>)}
            {(filteredData.length === 1) && <Country country={filteredData[0]} />}   
        </div>
    )
}

export default Data