import React from 'react';

const Pages = ({quantyPages, page, setPage}) => {

    return (
        <div className='getPages'>
            <div className="btn__pages">{ page > 1 && <i onClick={() => setPage(page - 1)}  className='bx bx-chevrons-left bx-flip-vertical bx-md'></i>}</div>
            <p>{page} de {quantyPages}</p>
            <div className="btn__pages">{ page < quantyPages && <i onClick={() => setPage(page + 1)} className='bx bx-chevrons-right bx-flip-vertical bx-md'></i>}</div>
        </div>
    );
};

export default Pages;