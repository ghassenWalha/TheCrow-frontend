import React, { Component } from 'react';
import './price-range-slide-bar.animate.js';
import './price-range-slide-bar.styles.scss';


class PriceRangeSlideBar extends Component {
    state = {  }
    render() { 
        return (

            <form>
  <div className="form-row">
   
    <div className="col-6 d-flex">
    <small id="min" className="form-text text-muted mr-1">MIN</small>
      <input type="text" className="form-control " placeholder="min"/>
    </div>
    <div className="col-6  d-flex">
    <small id="max" className="form-text text-muted mr-1">MAX</small>

      <input type="text" className="form-control" placeholder="max"/>
    </div>
   
  </div>
</form>
          );
    }
}
 
export default PriceRangeSlideBar;