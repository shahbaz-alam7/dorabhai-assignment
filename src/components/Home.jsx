import React from "react";
import Banner from "./helper/Banner";
import Library from "./helper/Library";
import Semester from "./helper/Semester";
import "./style/home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Semester />
      <Library />
    </div>
  );
};

export default Home;
