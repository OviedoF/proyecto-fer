import React from 'react';
import Item from './Item';
import './ItemList.css';


const ItemList = ( { productos } ) => {
    console.log(productos);

    return (
        <div className='itemList'>
            {productos.map(producto => {
                return (           
                    <Item 
                        image={producto.imagenUrl}
                        name={producto.nombre}
                        price={producto.precio}
                        key={producto.id}
                        category={producto.category}
                       
                    />
            
                )
            })}
        </div>
    );
}

export default ItemList;
