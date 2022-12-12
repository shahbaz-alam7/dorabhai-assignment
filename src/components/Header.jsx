import { headerPic, brand } from "../images/pic";
const Header = () => {
  return (
    <div className="header">
      <img src={headerPic} alt="" />
      <img src={brand} alt="" />
    </div>
  );
};

export default Header;
