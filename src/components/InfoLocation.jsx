import React from 'react';

const InfoLocation = ({location}) => {
    return (
        <div className='location__info'>
            <h1>{location.name}</h1>
            <p><strong>Type:</strong><br />{location.type}</p>
            <p><strong>Dimension:</strong> <br />{location.dimension}</p>
            <p><strong>Population:</strong><br />{location.residents?.length}</p>
        </div>
    );
};

export default InfoLocation;