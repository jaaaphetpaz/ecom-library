import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { books } from "../../data";
import { Link } from "react-router-dom";

const FeaturedBooks = () => {
  return books
    .map((book) => {
      return (
        <div className="book">
          <Link to="">
            <figure className="book__img--wrapper">
              <img src={book.url} alt="" className="" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to="" className="book__title--link">
              {book.title}
            </Link>
          </div>
          <div className="book__ratings">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star-half-alt" />
          </div>
          <div className="book__price">
            <span className="book__price--normal">{book.originalPrice}</span>
            {book.salePrice}
          </div>
        </div>
      );
    })
    .slice(0, 4);
};

export default FeaturedBooks;
