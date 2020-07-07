import React from 'react';
import "./footer.styles.css";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadDirectories} from '../../store/directories-slice/directories';
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Footer = (props) => (

    <div className=" footer ">
        <hr className="mb-0 " />
    <div className="row mt-0 logoBackGround">
    
        <Link className="center" to='\'><Logo/></Link></div>
   <div className="footerBar  row px-2">
   <div className="col-4">
        <h6 className="mt-5 ml-3" >EXPOLRE SHOP</h6>
{props.directoriesList.map((directory=>(<Link  className="nav-link t-white" key={`/categories/${directory.title}`} to={`/categories/${directory.title}`}>{directory.title}</Link>)))}
    </div>
    <div className="col-4">
    <h6 className="mt-5 ml-3">ONLINE SERVICES</h6>
    <Link  className="nav-link t-white" to={`/services/payment-methods`} key={`/services/payment-methods`}>payment methods</Link>
    <Link  className="nav-link t-white" to={`/services/shipping-options`} key={`/services/shipping-options`}>shipping options</Link>
    <Link  className="nav-link t-white" to={`/services/my-account`} key={`/services/my-account`}>my account</Link>
    <Link  className="nav-link t-white" to={`/services/returns`}>returns</Link>
    </div>
   
    <div className="col-4">
    <h6 className="mt-5 ml-3">THE SHOP</h6>
    <Link  className="nav-link t-white" to={`/services/careers`}>careers</Link>
    <Link  className="nav-link t-white" to={`/services/privacy`}>privacy</Link>
    <Link  className="nav-link t-white" to={`/services/legal`}>legal</Link>
        </div>        
   </div>
    </div>

);


const mapStateToProps = ({ directories: { directoriesList } }) => ({
    directoriesList,
  });
  
  const mapDispachToProps = (dispatch) => ({
    loadDirectories: () => dispatch(loadDirectories()),
  });
  
  
 
export default connect(mapStateToProps, mapDispachToProps)(Footer);