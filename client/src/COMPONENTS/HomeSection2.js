import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeSection2 = () => {
  return (
    <>
      <div className="homeSection2">
        <div className="hs2wrapper">
          <pre className="quote1">
            {`"Knowledge has no boundaries,
            and neither does our library"`}
          </pre>
          <NavLink to="/Books">
            <button className="exploreButton">
              Explore{" "}
              <FontAwesomeIcon icon={faArrowRight} className="arrowIcon" />
            </button>
          </NavLink>
        </div>
        <div className="hs2imgWrapper">
          <img src="/images/read.jpeg" alt="readpic" className="readPic"></img>
          <img src="/images/books.jpg" alt="books" className="booksPic"></img>
          <div className="aboutDescription">
            <h2>Can Be Interesting!!!</h2>
            <p>
              This website can offer a wide range of services and resources to
              its users. users can search for books and other materials
              available in the library's collection. They can browse by title,
              author, subject.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection2;
