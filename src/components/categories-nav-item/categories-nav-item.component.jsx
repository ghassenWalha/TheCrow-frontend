
import React from 'react';
import { Link } from "react-router-dom";
import '../categories-nav/categories-nav.styles.css';
const CategoriesNavItem = ({className,  disabled, id, parentId, selected, title, handleClick,...htmlProps }) => {
   
    return (   
        <div>
    <li key={id} className={`nav-item ${className}`} 
    aria-expanded={selected}
    // aria-selected={selected}
    data-tab-id={id}
    id = {title}
    // onFocusCapture={()=> handleClick(id)}
    >
    <Link className="nav-link px-5 mx-4 a" to={`/categories/${title}`}>
      {title.toUpperCase()}
    </Link>{" "}
  </li> 
        </div>

  );
}
 
export default CategoriesNavItem;