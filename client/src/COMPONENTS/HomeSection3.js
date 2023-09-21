import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const HomeSection3 = () => {
  return (
    <div className="homeSection3">
      <div className="hs3imgWrapper">
        <img
          src="/images/top-image22.webp"
          alt="bookPic"
          className="sec3Book"
        ></img>
        <img
          src="/images/signup.jpeg"
          alt="kindleusing"
          className="sec3Kindle"
        ></img>
      </div>
      <div className="hs3TextWrapper">
        <pre>{`"Open a book and open your mind."`}</pre>
        <NavLink to="/Login">
          <button className="loginButton">
            Login <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeSection3;
