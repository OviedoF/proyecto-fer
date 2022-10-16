import React from "react";
import CategorieCard from "./CategorieCard";
import styles from './CategoriesContainer.module.scss';

export default function CategoriesContainer() {
  return (
    <section className={styles.categories_container}>
      <CategorieCard
        texto="Pelelas"
        img="https://res.cloudinary.com/syphhy/image/upload/v1664045073/fernanda%20/image-removebg-preview_3_ppeoko.png"
        direccion="ltr"
        redirect="/category/pelela"
      />

      <CategorieCard
        texto="Andarines"
        img="https://res.cloudinary.com/syphhy/image/upload/v1664045075/fernanda%20/image-removebg-preview_1_jcwggk.png"
        direccion="rtl"
        redirect="/category/andarines"
      />
    </section>
  );
}
