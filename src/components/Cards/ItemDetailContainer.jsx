import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'


const film = { id: 1,  imagenUrl:"https://res.cloudinary.com/syphhy/image/upload/v1664045074/fernanda%20/image-removebg-preview_2_p4ul4y.png"
, title:"Descripción", info:"hola comki hshshshs sbsbsbbs ssshs"};

const  ItemDetailContainer = () => {
   const [data, setData]= useState({});
useEffect (()=> {
const getData =  new Promise(resolve => {
    setTimeout (()=> {
        resolve (film);
    }, 3000
    );
});
getData.then(res=> setData (res));
},[])

  return (
   <ItemDetail data={data}/>
  )
}

export default  ItemDetailContainer;