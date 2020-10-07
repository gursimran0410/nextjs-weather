import React, { useState } from 'react'
const axios = require("axios");


function home() {
    const [cityInput,setCity] = useState("")
    let [res,setResp] = useState({})

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt)
        console.log(`${cityInput}`,"-----------City Input")
        axios({
            "method":"GET",
            "url":"https://community-open-weather-map.p.rapidapi.com/weather",
            "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key":"fb624c05ccmshb3d3f051be11074p1d8b84jsna8f2531f6d95",
                "useQueryString":true
            },
            "params":{
                // "lat":"0",
                // "lon":"0",
                // "callback":"test",
                // "id":"2172797",
                // "lang":"null",
                // "units":"%22metric%22",
                // "mode":"xml%2C html",
                "q":`${cityInput}`
            }
        })
        .then(response=>{setResp(response)})
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    City Name:
                    <input
                        type = "text"
                        className = "cityInput"
                        value = {cityInput}
                        onChange = {e => setCity(e.target.value)}
                    />
                </label>        
                <input type="submit" value="Submit" />
            </form>
            <div>Gursimran Singh</div>
            <div>{JSON.stringify(res)}</div>
        </>
    )
}

export default home