import React from "react";
import "../style/librabry.css";
import { data } from "../libraryData";
import { AiOutlineInfoCircle } from "react-icons/ai";
const Library = () => {
  return (
    <>
      <div className="library-main">
        <div className="heading">
          <p className="title">Library</p>
          <p className="see-all">See All</p>
        </div>
        <div className="library-slider">
          {data.map((item, i) => {
            return <Component {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Library;

const Component = ({ color, topic }) => {
  return (
    <div className="library" style={{ background: color }}>
      <div className="topic">
        <p>{topic}</p>
      </div>
      <div className="btm">
        <div className="core">
          <p>Core</p>
        </div>
        <div className="info">
          <AiOutlineInfoCircle className="icon" />
        </div>
      </div>
    </div>
  );
};
