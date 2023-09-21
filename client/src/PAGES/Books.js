import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../CSS/Books.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllBooks from "../COMPONENTS/AllBooks";
import {books} from "../DATA/BooksList";
import SearchSection from "../COMPONENTS/SearchSection";


const Books = () => {
  return (
    <> 
    <div className="booksContainer">
      <div className="booksSection1">
        <p>
          "The more that you read, the more things you will know. The more that
          you learn, the more places you'll go." - Dr. Seuss
        </p>
        <p>
          Top Rated Books :
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
        </p>
        <div className="books">
          <img src="/images/book1.avif" alt="bookPics"></img>
          <img src="/images/book2.avif" alt="bookPics"></img>
          <img src="/images/book3.avif" alt="bookPics"></img>
          <img src="/images/book4.avif" alt="bookPics"></img>
          <img src="/images/book5.avif" alt="bookPics"></img>
        </div>
      </div>
      <AllBooks books={books}/>
      <SearchSection books={books}/>
    </div>
     </>
  );
};

export default Books;
