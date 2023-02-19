import React from 'react';

//Styled
import "./Headre/Headere.css"

const Headere = () => {
    return (
        <div>
            <span onClick={()=>scroll(0,0)} className='headre'>Entertainment</span>
        </div>
    );
};

export default Headere;