import React from "react";
import "../style/banner.css";

import { BsFillTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import banner from "../../images/banner_img.png";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-detail">
        <div className="detail">
          <h1>Dorabhai</h1>
          <p>Content creator</p>
        </div>
        <div className="contact">
          <p>
            <TbWorld className="icon" />
            <span> dummy</span>
          </p>
          <p>
            <MdEmail className="icon" />
            <span> hello@dorabhai.com</span>
          </p>
          <p>
            <BsFillTelephoneFill className="icon" />
            <span> 123-456-7890</span>
          </p>
        </div>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
