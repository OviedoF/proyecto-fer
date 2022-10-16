import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './CategorieCard.module.scss';

export default function CategorieCard({texto, img, direccion, redirect}) {
  return (
    <div className={styles.categories_card} direction={direccion}>
        <img src={img} alt={texto + ' imagen'} />

        <div className={styles.text}>
            <h3>{texto}</h3>
            
            <NavLink to={redirect}>VER MÁS</NavLink>
        </div>
    </div>
  )
}
