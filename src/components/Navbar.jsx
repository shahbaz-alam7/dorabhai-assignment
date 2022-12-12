import React from "react";

import { AiFillHome } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { RiEditBoxFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import {
  youtube,
  instagram,
  twitter,
  facebook,
  playstore,
  man,
} from "../images/pic";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-top">
        <p className="greet">Good Morning Shahbaz</p>
        <img src={man} alt="" className="img" />
      </div>
      <div className="nav-links">
        <ul className="nav-ul">
          <li className="active">
            <AiFillHome className="icon" />
            <span>Home</span>
          </li>
          <li>
            <FaBookOpen className="icon" />
            <span>Library</span>
          </li>
          <li>
            <SiBookstack className="icon" />
            <span>My Courses</span>
          </li>
          <li>
            <MdManageAccounts className="icon" />
            <span>Account</span>
          </li>
          <li>
            <RiEditBoxFill className="icon" />
            <span>Blog</span>
          </li>
        </ul>
        <div className="social-media">
          <p>Follow us on</p>
          <div className="social-media-icons">
            <img src={youtube} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
          </div>
          <img className="playstore" src={playstore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
