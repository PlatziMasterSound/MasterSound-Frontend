import React, { useState } from 'react';


import '../styles/componentsStyles/HeartLike.scss';


const HeartLike = () =>{
        const [clase, setClase] = useState(true);
        
        const handleClick = () => {
            setClase(!clase);
        };

    return(
        <div className="like-box">
            <div onClick={handleClick} className={clase ? 'like' : 'liked'}></div>
            </div>
    )
}


export default HeartLike;
