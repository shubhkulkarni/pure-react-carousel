import React, { useState } from "react";

import Carousel from "./../../components/Carousel/Carousel";
import mockData from "./../../mock/mock-data";
import Filter from "./../../components/Filter/Filter";
import styles from "./Home.module.css";
const filters = ["Clothing", "Electronics"];

const Home = () => {
  const [filterValue, setFilterValue] = useState("Clothing");
  const onChange = (e) => setFilterValue(e.target.value);
  return (
    <div className={styles.home}>
      <div>
        <Carousel list={mockData[filterValue]} />
      </div>
      <div className={styles.filter}>
        <Filter list={filters} value={filterValue} onChange={onChange} />
      </div>
      <div className={styles.tag}>Made with ❤️ by Shubham Kulkarni</div>
    </div>
  );
};

export default Home;
