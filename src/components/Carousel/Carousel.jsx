import React, { useState } from "react";
import styles from "./Carousel.module.css";
import mockData from "./../../mock/mock-data";

function Carousel({ list }) {
  const [currentItem, setCurrentItem] = useState(1);

  const TOTAL_ITEMS = list.length;

  const incrementItem = () => {
    if (currentItem + 1 !== TOTAL_ITEMS) {
      setCurrentItem((item) => item + 1);
    }
  };

  const decrementItem = () => {
    if (currentItem > 0) {
      setCurrentItem((item) => item - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.arrow} onClick={decrementItem}>
        {"<"}
      </div>
      <div className={styles.item}>
        {list[currentItem - 1]?.name || "No Item"}
      </div>
      <div className={`${styles.item} ${styles.centered}`}>
        {list[currentItem].name}
      </div>
      <div className={styles.item}>
        {list[currentItem + 1]?.name || "No Item"}
      </div>
      <div className={styles.arrow} onClick={incrementItem}>
        {">"}
      </div>
    </div>
  );
}

export default Carousel;
