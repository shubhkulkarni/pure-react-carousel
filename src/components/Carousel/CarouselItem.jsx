import React from "react";
import styles from "./Carousel.module.css";
function CarouselItem({ data, clickHandler }) {
  return data ? (
    <div className={styles.item} onClick={clickHandler}>
      <img src={data.image} className={styles.image} />
      <div className={styles.infoItem}>
        <div className={styles.title}>{data.name}</div>

        <div className={styles.price}>${data.price}</div>
      </div>
    </div>
  ) : (
    <div className={styles.empty} />
  );
}

export default CarouselItem;
