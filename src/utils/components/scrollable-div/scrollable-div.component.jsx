import React from "react";
import './scrollable-div.styles.css'
const ScrollableDiv = ({children}) => {
  return (
    <div className="ml-3 mr-1">
      <div className=" search-suggestions-items scrollbar bordered-scrollbar thin">
        <div className="d">
         {children}
        </div>
      </div>
    </div>
  );
};

export default ScrollableDiv;
