import React, { Component, Children } from "react";
import propTypes from "prop-types";
import './custom-text.styles.css';
class CustomText extends Component {
  state = {
    seeMore: false,
  };

  handleSeeMoreToggled = this.props.expend
    ? () => {
        const text = document.getElementById("textToBeExpended");
        const seeMore = document.getElementById("seeMore");

        if (!this.state.seeMore) {
          text.style.overflow = "visible";

          text.setAttribute("data-content", "");
          seeMore.style.display = "none";
        } else {
          text.setAttribute("data-content", "...");
          text.style.overflow = "hidden";
          seeMore.style.display = "block";
        }

        this.setState({ seeMore: !this.state.seeMore });
      }
    : () => {};




  render() {
      
    const {children,lineHeight,maxLines,unite,className} = this.props;
     const maxHeight =parseInt(maxLines)*parseFloat(lineHeight); 
     
    const textStyle={
        lineHeight:lineHeight,
        maxHeight:maxHeight+unite
        
    }
    return (
      <div className={"div-rapper "+className}>
        <div
          onClick={this.handleSeeMoreToggled}
          id="textToBeExpended"
          className="text-area"
          data-content="..."
          style={textStyle}
        >
            <p>
            {children}
            </p>
        
        </div>

        {this.props.expend && <h6 id="seeMore" onClick={this.handleSeeMoreToggled}>
          see more
        </h6>}
      </div>
    );
  }
}
CustomText.propTypes = {
  maxLines: propTypes.string.isRequired,
  lineHeight: propTypes.string,
  unite:propTypes.string,
  children: propTypes.string.isRequired,
  expend: propTypes.bool,
  className:propTypes.string
};
CustomText.defaultProps = {
  lineHeight: "1.2em",
  expend: true,
  unite:'em',
  className:''
};

export default CustomText;
