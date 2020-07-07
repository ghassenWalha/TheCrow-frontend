import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchBar from "../search-bar/search-bar.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import Card from "../card/card.component";
import './header.styles.css'
const Routes = ({ currentUser }) => (
  <ul className="navbar-nav ml-auto routes ">
  
    <li className="nav-item mr-1">
      <Link className="nav-link pb-0" to="/shop">
        SHOP
      </Link>
    </li>
    <li className="nav-item mx-1">
      <Link className="nav-link pb-0" to="/shop">
        CONTACT
      </Link>
    </li>
    {!currentUser && (
  <li className="nav-item mx-1">
    <Link className="nav-link pb-0" to="/signin">
      SIGNIN
    </Link>
  </li>
)}{" "}
{currentUser && (
  <React.Fragment>
    <li className="nav-item mx-1">
      <Link className="nav-link" to="/me">
        {currentUser.name}
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link pb-0" to="/logout">
        LOGOUT
      </Link>
    </li>
  </React.Fragment>
)}
     {currentUser &&<Card />}
  </ul>
);

const Header = ({ currentUser }) => (
<div>
<div id="navbar"className="container-fluid  fixed-top bg-white">
    <nav className="navbar  navbar-light row">
      <div className="col-lg-1 col-xl-1  col-md-1   pl-0">
        <Link className="" to="/">
          <Logo className="navbar-brand" />
        </Link>
      </div>

      <div className=" col-lg-8 col-xl-8 col-md-7 d-inline ">
        <SearchBar />
      </div>

      <div className="col-lg-2 col-xl-2 col-md-4   pl-0 ">
        <Routes currentUser={currentUser} />
       
      </div>
      {/* col-sm-4 col-xs-4 */}
      {/* col-sm-4 col-xs-4 */}
     {/*  col-sm-8 col-xs-8 */}
    </nav>
  </div>
  
</div>


);

const mapStateToProps = ({ auth: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Header);

