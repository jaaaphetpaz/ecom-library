import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              logo="bolt"
              subtitle="Easy and Quick"
              para="Get access to the book you pruchased online instantly"
            />
            <Highlight
              logo="book-open"
              subtitle="10,000+ Books"
              para="Library has books in all your favourite genre."
            />
            <Highlight
              logo="tags"
              subtitle="Affordable"
              para="Get your hands on popular titles starting at only $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
