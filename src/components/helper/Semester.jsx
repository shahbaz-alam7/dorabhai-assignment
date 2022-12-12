import React from "react";
import Course from "./Course";
import data from "../courseData1";
const Semester = () => {
  return (
    <>
      <div className="semester">
        <div className="heading">
          <p className="title">Semester Courses</p>
          <p className="see-all">See All</p>
        </div>
        <div className="courses">
          {data.map((item, i) => {
            return <Course {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Semester;
