import React from "react";
import "./Home.css";
import Carousel from "./../../components/Carousel/Carousel";
import mockData from "./../../mock/mock-data";

const { apparel } = mockData;

const Home = () => {
  return (
    <div>
      <Carousel list={apparel} />
    </div>
  );
};

export default Home;
