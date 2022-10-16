import React from 'react'
import styles from './FilterProducts.module.scss';

export default function FilterProducts() {
  return (
    <section className={styles.filter_container}>   
        <h2>Filtros</h2>

        <form className="price">
            <h3>Precios</h3>

            <div className="option">
                <label htmlFor="lowest">$0 - $2500</label>
                <input type="radio" name="price" id="lowest" />
            </div>

            <div className="option">
                <label htmlFor="middle">$2501 - $5500</label>
                <input type="radio" name="price" id="middle" />
            </div>

            <div className="option">
                
                <label htmlFor="expensive">$5501 - $10000</label>
                <input type="radio" name="price" id="expensive" />
            </div>

        </form>

        
    </section>  
  )
}
