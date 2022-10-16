import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../productos';
import styles from './DetailsPage.module.scss';
import {useDispatch } from 'react-redux';
import { agregarACarrito } from '../../../actions/cartActions';

const DetailsPage = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const productFinded = productos.filter(element => element.id === parseInt(id))[0];
        setProduct(productFinded);
    }, [id]);

    return (
        <main>
            <div className={styles.detalles}>
                <img src={product.imagenUrl} alt={product.nombre} />

                <div className={styles.text}>
                    <h1>{product.nombre}</h1>
                    <span>{product.categoria}</span>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus in numquam nulla laborum deserunt quibusdam! Quod optio minus, mollitia consectetur explicabo animi neque nihil quaerat sint, similique perspiciatis eum error numquam corporis. Dolore est fugit officia facere deleniti voluptatum quis?</p>
                    
                    <div className={styles.buy}>
                        <p>Precio: ${product.precio}</p>
                        
                        <button onClick={() => dispatch( agregarACarrito(product) )}>Añadir al carrito</button>
                    </div>
                </div>
            </div>

            <div className={styles.relacionados}>

            </div>
        </main>
    );
}

export default DetailsPage;
