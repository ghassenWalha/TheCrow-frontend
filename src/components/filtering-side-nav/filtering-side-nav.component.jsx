import React from 'react'
import "./filering-side-nav.styles.css";
import PriceRangeSlideBar from '../price-range-slide-bar/price-range-slide-bar.component';

const FilteringSideNav = () => {
    return (  
    
<React.Fragment>

<div id="layoutSidenav" className="p-1   ">
    <div id="layoutSidenav_nav ">
        <nav className="sb-sidenav accordion sb-sidenav-dark " id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav mt-2">
                
                   
                    <div className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        
                        SORTING BY
                        
                    </div>
                    <div >
                        <nav className="sb-sidenav-menu-nested nav">
                            <div className="nav-link " href="layout-static.html">Newest</div>
                            <div className="nav-link" href="layout-sidenav-light.html">Most Popular</div>
                            <div className="nav-link" href="layout-sidenav-light.html">Price</div>
                        </nav>
                    </div>
                    <div className="nav-link   " >
                        
                        PRICE RANGE
                       
                    </div>
                    <div className="p-2 m-1" >
                        
                          
                           <PriceRangeSlideBar/>
                         
                       
                    </div>
                    
                 
                </div>
            </div>
          
        </nav>
    </div>
    </div>
    </React.Fragment>
     );
}
 
export default FilteringSideNav;