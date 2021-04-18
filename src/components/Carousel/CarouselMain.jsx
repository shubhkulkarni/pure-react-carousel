import React from "react";
import styles from "./Carousel.module.css";
function CarouselMain({ data }) {
  return (
    <div className={`${styles.item} ${styles.centered}`}>
      <div className={styles.category}>{data.category}</div>

      <img src={data.image} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.title}>{data.name}</div>
        <div className={styles.desc}>Exclusively availbale on example.com</div>
        <div className={styles.priceCtr}>
          <div className={styles.price}>${data.price}</div>
          <div className={styles.rating}>
            <span className={styles.ratingDesc}>rating:</span> 🌟🌟🌟🌟
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselMain;
