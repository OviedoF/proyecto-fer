
import React from 'react';
import ItemList from './ItemList'

const productos = [
    {
        nombre: 'Pelela Bacinilla Infantil ',
        precio: 2700,
        id: 1,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045072/fernanda%20/image-removebg-preview_4_rhfdwv.png',
      
       
    },
    {
        Category: 'PELELA',
        nombre: 'Pelela Bacinilla  mikey',
        precio: 2500,
        id: 2,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045073/fernanda%20/image-removebg-preview_3_ppeoko.png'
    },
    {
        nombre: 'Andador Patrol Caminador',
        precio: 9500,
        id: 3,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045075/fernanda%20/image-removebg-preview_1_jcwggk.png',
        Category:'PELELA'
    },
    {
        nombre: 'Moto Pata Andarin',
        precio: 9500,
        id: 4,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png'
    },
    {
        nombre: 'Moto Pata Andarin',
        precio: 9500,
        id: 5,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045075/fernanda%20/image-removebg-preview_1_jcwggk.png',
    },
    {
        nombre: 'Moto Pata  Andarin',
        precio: 9500,
        id: 6,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png'
    },
{
        nombre: 'Moto Pata  Andarin',
        precio: 9500,
        id: 7,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png'
    },
    {
        nombre: 'Moto Pata  Andarin',
        precio: 9500,
        id: 7,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png'
    },
    {
        nombre: 'Moto Pata  Andarin',
        precio: 9500,
        id: 8,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png'
    },
    {
        nombre: 'Moto Pata  Andarin',
        precio: 9500,
        id: 9,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png'
    },
    {
        nombre: 'Moto Pata  Andarin',
        precio: 9500,
        id: 10,
        imagenUrl: 'https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png'
    }
]

const ItemListContainer = () => {
    return (
        <div className='ItemListContainer'>
            <ItemList productos={productos}/>
        </div>
    );
}

export default ItemListContainer;
