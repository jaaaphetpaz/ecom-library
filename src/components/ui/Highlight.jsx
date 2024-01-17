import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Highlight = ({ logo, subtitle, para }) => {
  return (
    <div className="highlight">
      <div className="highlight__img">
        <FontAwesomeIcon icon={logo} />
      </div>
      <h3 className="highlight__subtitle">{subtitle}</h3>
      <p className="highlight__para">{para}</p>
    </div>
  );
};

export default Highlight;
