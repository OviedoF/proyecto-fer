import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import ProductsContainer from './products/ProductsContainer';

const CarritoPage = () => {    
    const carrito = useSelector(state => state.carrito);
    const [precioFinal, setPrecioFinal] = useState(0);

    useEffect(() => {
        let precio = 0;
        carrito.forEach(el => {
            const pProducto = el.precio;
            precio += pProducto
        });

        setPrecioFinal(precio);
    }, []);

    return (
        <main>
            <ProductsContainer productos={carrito}/>

            {precioFinal > 0 
            ? 
                <div>
                    precio Final: ${precioFinal}
                    <button>Confirmar compra</button>
                </div> 
            : 
            'No hay nada en el carrito, por favor agregue productos.'
            }
        </main>
    );
}

export default CarritoPage;
