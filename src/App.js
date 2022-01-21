import React, { useState, useEffect } from "react";
import axios from "axios"
import Filter from "./components/Filter"
import Data from "./components/Data"

function App() {
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([])
  const [weather, setWeather] = useState([])

  const handleFilterChange = (event) => setFilter(event.target.value)

  const hookCountries = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data)
      })
  }

  useEffect(hookCountries, [])

  return (
    <div>
      <Filter onchange={handleFilterChange} filter={filter}/>
      <Data data={data} filter={filter} setFilter={setFilter} weather={weather} setWeather={setWeather}/>
    </div>
  );
}

export default App;