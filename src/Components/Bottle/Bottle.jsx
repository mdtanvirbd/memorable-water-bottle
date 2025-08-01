import React from 'react';
import './bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price}=bottle;
    return (
        <div className='bottle'>
           <h4>Bottle:{name} </h4>
           <img className='bottle-img' src={img} alt="" srcset="" />
           <p>Price: ${price}</p>
           <button onClick={()=> handleAddToCart(bottle)}>Purches</button>
        </div>
    );
};

export default Bottle;