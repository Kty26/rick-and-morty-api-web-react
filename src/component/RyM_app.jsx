import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './Location';
import Residents from './Residents';
const Randm_app = ()=>{

  const [rickLocation, setrickLocation] = useState({})
 useEffect(()=> {
    let idLocation = Math.floor(Math.random() * 126) + 1
   axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
        .then(res =>setrickLocation(res.data))
 }, [])

 //console.log(idLocation);
 const [searchLoc, setSearchLoc] = useState("")
 
 const search = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchLoc}`)
        .then(res =>setrickLocation(res.data))
        setSearchLoc("")
 }

    return (
        <div>
            <input type="text" value={searchLoc} onChange={(e)=> setSearchLoc(e.target.value)} />
            <button onClick={search}>buscar</button>
            
        <Location rick={rickLocation}/> 
        <Residents/>
        </div>
    );
};
export default Randm_app;