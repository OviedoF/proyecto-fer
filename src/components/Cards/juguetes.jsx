import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';
const Item = ({ image, name, price }) => {
    return (
        <div className='item'>
            <img src={image} alt="imagen producto" />
            <h2>{name}</h2>
            <p>${price}</p>
     
            <Link to="/category">maas</Link>
           
        </div>
    );
}

export default Item;
