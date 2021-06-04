import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import CarouselItem from "./CarouselItem";
import CarouselMain from "./CarouselMain";

function Carousel({ list }) {
  const [currentItem, setCurrentItem] = useState(1);
  const [dataList, setDatalist] = useState(list);
  const TOTAL_ITEMS = dataList.length;

  useEffect(() => {
    setDatalist(list);
    setCurrentItem(1);
  }, [list]);

  // for timely increment of slider

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (currentItem + 1 !== TOTAL_ITEMS) {
  //       setCurrentItem((item) => item + 1);
  //     } else {
  //       setCurrentItem(1);
  //     }
  //   }, 4000);
  // }, [currentItem]);

  const incrementItem = () => {
    if (currentItem + 1 !== TOTAL_ITEMS) {
      setCurrentItem((item) => item + 1);
    } else {
      setCurrentItem(0);
    }
  };

  const decrementItem = () => {
    if (currentItem > 0) {
      setCurrentItem((item) => item - 1);
    } else {
      setCurrentItem(TOTAL_ITEMS - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrow} onClick={decrementItem}>
        {"<"}
      </div>
      <CarouselItem
        data={
          currentItem === 0
            ? dataList[TOTAL_ITEMS - 1]
            : dataList[currentItem - 1]
        }
        clickHandler={decrementItem}
      />
      <CarouselMain data={dataList[currentItem]} />
      <CarouselItem
        data={
          currentItem + 1 === TOTAL_ITEMS
            ? dataList[0]
            : dataList[currentItem + 1]
        }
        clickHandler={incrementItem}
      />

      <div className={styles.arrow} onClick={incrementItem}>
        {">"}
      </div>
    </div>
  );
}

export default Carousel;
