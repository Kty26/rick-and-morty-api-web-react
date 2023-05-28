import React, { useEffect, useState } from "react";
import axios from "axios";
const Residents = () => {

    const [residents, setResidents] = useState({})

    useEffect(() => {
     axios.get (`https://rickandmortyapi.com/api/character/7`)
     .then(res => setResidents(res.data))
    }, [])
    console.log(residents);
   
    const bgStatus = () => {
        if (residents.status === "Alive") {
         return "chartreuse"
        }

        else if (residents.status === "Dead") {
         return "red"
        }

        else {
         return "gray"
        }
    }

    
    return (
        <div className="residentCard">

         <img src={residents.image} alt="" />
         <h3>{residents.name}</h3>
           <div className="infoEstatus">
               <div className="status" style={{backgroundColor: bgStatus()}}></div>
                <p>{residents.status}</p>
            </div>
            
         <p><strong>Especie: </strong>{residents.species}</p>
         <p><strong>Origin: </strong>{residents.origin?.name}</p>
         <p><strong>Episode: </strong>{residents.episode?.length}</p>
         
        </div>
    )

}

export default Residents