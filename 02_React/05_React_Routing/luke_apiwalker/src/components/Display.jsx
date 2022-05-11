import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Display = () => {
  // State to store API returned data
  const [apiData, setApiData] = useState()
  const [homeworld, setHomeworld] = useState("")
  const [errMsg, setErrMsg] = useState()
  const [errImg, setErrImg] = useState()
  // useParams to grab data from Path
  const {query, num} = useParams();

  const peopleHomeworld = (url) => {
    axios.get(url)
      .then( resp => {
        setHomeworld(resp.data.name);
        console.log("Inside people homeworld:", resp.data.name);
      })
      .catch(err => console.log("Error from secondary API call:", err));
  }

  useEffect( () => {
    // Reset ApiData so that it does't show wrong previous data
    setApiData(null)
    if (query) {
      let apiQuery = `https://swapi.dev/api/${query}/${num}/`;
      axios.get(apiQuery)
      .then( resp => {
        console.log(resp.data);
        setApiData(resp.data)
        setErrMsg("");
        setErrImg("");
        if (query==="people") peopleHomeworld(resp.data.homeworld);
      })
      .catch( err => {
        console.log("Error", err)
        setErrMsg("These are not the droids you're looking for...*magic hand wave*")
        setErrImg(
          `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⣶⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀
          ⠀⠀⠀⣰⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣇⠀⠀⠀
          ⠀⠀⢠⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⡆⠀⠀
          ⠀⢀⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡀⠀
          ⠀⣼⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣷⠀
          ⢰⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡇
          ⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿
          ⢻⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡄⠀⠀⠀⢀⣴⣿⣿⠿⢿⣿⠿⠿⠛⠛⠿⠿⢿⣿⠿⣿⣿⣦⡀⠀⠀⠀⢀⣿⠃⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡟
          ⠀⢻⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⢻⣷⡀⠀⠀⣾⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⡀⠀⢀⣾⡿⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⡿⠀
          ⠀⠀⢻⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠘⣿⣷⣄⢸⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⡇⢠⣾⣿⠇⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡿⠁⠀
          ⠀⠀⠀⢻⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⡿⠁⠀⠀
          ⠀⠀⠀⠀⠻⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⡟⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⢿⣿⣿⡿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
        )
      })
    }
  },[query, num])



  return (
    <div>
      {
        apiData && !errMsg && ((
          query === 'planets' &&
        <>
          <h1>Planet Name: {apiData.name || ''}</h1>
          <h2>Climate: {apiData.climate || ''}</h2>
          <h2>Orbiatal Period: {apiData.orbital_period || ''}</h2>
          <h2>Terrain: {(apiData.terrain &&
            apiData.terrain.includes(",") ? apiData.terrain.split(",").join(" || "): apiData.terrain)
            || "Loading"}</h2>
        </>
        )
        ||
        ( query === 'people' &&
        <>
          <h1>Name: {apiData.name || ''}</h1>
          <h2>Hair: {apiData.hair_color || ''}</h2>
          <h2>Mass: {apiData.mass || ''}kg</h2>
          <h2>Height: {apiData.height/100 || ''}m</h2>
          <h2>Homeworld: { apiData.homeworld && 
            <Link to={`/planets/${apiData.homeworld[apiData.homeworld.length-2]}`}>
            {homeworld}</Link>
          } </h2>
        </>
        ))
      }
      {
        errMsg &&
          (
            <p>
              <h1>{errMsg}</h1>
              {errImg}
            </p>
          )
      }
    </div>
  )
}

export default Display