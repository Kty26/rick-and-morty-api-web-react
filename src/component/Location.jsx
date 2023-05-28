import React from "react";

const Location =({rick})=> {

return(
   <div className='cardLocation'> 

    <h1>{rick.name}</h1>
    <h3>{rick.id}</h3>
    <p><strong>Tipe: </strong>{rick.type}</p>
    <p><strong>Dimention: </strong>{rick.dimension}</p>
    <p><strong>Residents: </strong>{rick.residents?.length}</p>
    
    </div>
);
};

export default Location;