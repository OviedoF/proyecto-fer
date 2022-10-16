import React from 'react'
import styles from './ProductsContainer.module.scss';
import Item from './Item';

export default function ProductsContainer({productos}) {

  return (
      <div className={styles.itemList}>
          {productos.map(producto => {
              return (           
                  <Item 
                      image={producto.imagenUrl}
                      name={producto.nombre}
                      price={producto.precio}
                      key={producto.id}
                      id={producto.id}
                      category={producto.category}
                  />
              )
          })}
      </div>
  );
}
