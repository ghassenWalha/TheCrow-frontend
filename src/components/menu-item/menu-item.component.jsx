import React from "react";
import { withRouter, Link } from "react-router-dom";

import "./menu-item.styles.css";
// import "../new-direcrtory/new-directory.jquery.js"

const MenuItem = ({ title, imageUrl, size, history, match }) => (
  <div
    className={`${size} menu-item m-0`}
    onClick={() => history.push(`${match.url}categories/${title}`)}
  > 
    <div className="img background-image d-block p-relative">

    <div
      className="background-image "
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div class="overlay  p-relative">
      <Link href="#" class="expand">
        {title}
      </Link>
      <a class="close-overlay hidden ">x</a>
    </div>


    </div>
 
  </div>
);

export default withRouter(MenuItem);
{
  /* <div className='content'>
      <h1 className='title'>{title}</h1>
      <span classNam
      e='subtitle'>SHOP NOW</span>
    </div> */
}
