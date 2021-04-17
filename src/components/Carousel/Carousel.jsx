import React, { useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ list }) {
  return (
    <div className={styles.container}>
      <div className={styles.arrow}>{"<"}</div>
      <div className={styles.item}>Item1</div>
      <div className={`${styles.item} ${styles.centered}`}>Item2</div>
      <div className={styles.item}>Item3</div>
      <div className={styles.arrow}>{">"}</div>
    </div>
  );
}

export default Carousel;
