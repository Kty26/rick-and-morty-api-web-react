import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentCard = ({resident, quiteLoading}) => {

    const [residentItem, setResidentItem] = useState([])

    useEffect(() => {
        axios.get(`${resident}`)
            .then(res => {
                setResidentItem(res.data)
            })
    }, [])
    
    const bgStatus = () => {
        if (residentItem.status === "Alive"){
            return "lawngreen"
        } else if (residentItem.status === "Dead"){
            return "red"
        } else {
            return "gray"
        }
    }

    return (
        <div className='resident__card'>
            <img src={residentItem.image} alt="" />
            <div className='info__resident'>
                <h2>{residentItem.name}</h2>
                <hr />
                <p><strong>Specie: </strong>{residentItem.species}</p>
                <p><strong>Origin: </strong>{residentItem.origin?.name}</p>
                <p><strong>Episodes: </strong>{residentItem.episode?.length}</p>
            </div>
            <div className='info__status'>
                <div className='status' style={{backgroundColor: bgStatus()}} ></div>
                <p>{residentItem.status}</p>
            </div>
        </div>
    );
};

export default ResidentCard;