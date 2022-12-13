import { useState } from "react";

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
const links = [
  {
    icon: <AiFillHome className="icon" />,
    title: "Home",
  },
  {
    icon: <FaBookOpen className="icon" />,
    title: "Library",
  },
  {
    icon: <SiBookstack className="icon" />,
    title: "My Courses",
  },
  {
    icon: <MdManageAccounts className="icon" />,
    title: "Account",
  },
  {
    icon: <RiEditBoxFill className="icon" />,
    title: "Blog",
  },
];
const Navbar = () => {
  const [activeLink, setAtiveLink] = useState(0);
  return (
    <div className="navbar">
      <div className="nav-top">
        <p className="greet">Good Morning Shahbaz</p>
        <img src={man} alt="" className="img" />
      </div>
      <div className="nav-links">
        <ul className="nav-ul">
          {links.map((item, i) => {
            return (
              <li
                className={activeLink === i ? "active" : ""}
                onClick={() => setAtiveLink(i)}
              >
                {item.icon}
                <span>{item.title}</span>
              </li>
            );
          })}
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
