import React from 'react'
import FilterProducts from './FilterProducts'
import ProductsContainer from './ProductsContainer'
import styles from './ProductsPage.module.scss';

export default function ProductsPage({productos}) {
  return (
    <main className={styles.main}>
      <FilterProducts />

      <ProductsContainer productos={productos}/>
    </main>
  )
}
