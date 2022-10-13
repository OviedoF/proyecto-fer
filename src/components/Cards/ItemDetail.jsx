/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({data}) => {
  return (
    <div   className='container'>
        <div className='Detail'>
          <img className='data.image' src={data.imagenUrl}></img>
            <div className='title'>
                <h1>{data.title }</h1> 
                <p>{data.info}</p>
  
                </div>
            


        </div>



    </div>
  );
}

export default ItemDetail;