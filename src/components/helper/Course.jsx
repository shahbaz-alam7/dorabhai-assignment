import "../style/course.css";
import { account, video, notes } from "../../images/pic";
const Course = ({ img, desc, title }) => {
  return (
    <div className="course">
      <div className="top">
        <figure>
          <img className="btm_image" src={img} alt="" />
        </figure>
        <div className="description-box">
          <h4>{title}</h4>
          <p>
            <span>Also known as : </span>
            {desc}...<span>see more</span>
          </p>
        </div>
      </div>
      <div className="line" />
      <div className="bottom">
        <Components image={video} title={"Video (122)"} color="#6B72D5" />
        <Components image={notes} title={"Notes (102)"} color="#FD9E47" />
        <Components image={account} title={"Educators (92)"} color="#79be43" />
      </div>
    </div>
  );
};

export default Course;

const Components = ({ image, title, color }) => {
  return (
    <div className="bottom-div">
      <figure style={{ backgroundColor: color }}>
        <img src={image} alt="" />
      </figure>
      <p>{title}</p>
    </div>
  );
};
