import React, { Component } from "react";
import { connect } from "react-redux";
//  import { useLocation } from "react-router-dom";

import { loadDirectories } from "../../store/directories-slice/directories";
import CategoriesNavItem from "../categories-nav-item/categories-nav-item.component";

import "./categories-nav.styles.css";
const TAB_SELECTOR = "ul li";
class CategoriesNav extends Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedTabId:"",
      indicatorWrapperStyle: {},
      tablistElement: null,
    };
  }

  handleTabClick = (id) => {
    console.log(id);
    this.setState({ selectedTabId: id });
  };

  componentDidMount() {
    this.props.loadDirectories();
   this.moveSelectionIndicator();
    window.onresize = this.moveSelectionIndicator;
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params!== prevProps.match.params) {
      this.moveSelectionIndicator();
    }
  }

  refHandlers = (tabElement) => this.setState({ tablistElement: tabElement });

  moveSelectionIndicator = () => {
    const {directoriesList,match}=this.props;
    if (this.state.tablistElement == null) {
      return;
    }
const directory=directoriesList.find((directory)=>match.params.category===directory.title);
    console.log(directory);
   this.setState({selectedTabId:directory ? directory._id:"" });

    const tabIdSelector = `${TAB_SELECTOR}[data-tab-id="${directory ? directory._id:""}"]`;
    const selectedTabElement = this.state.tablistElement.querySelector(
      tabIdSelector
    );
    // console.log(selectedTabElement);

    let indicatorWrapperStyle = { display: "none" };
    if (selectedTabElement != null) {
      const {
        clientHeight,
        clientWidth,
        offsetLeft,
        offsetTop,
      } = selectedTabElement;
      indicatorWrapperStyle = {
        height: clientHeight,
        transform: `translateX(${Math.floor(
          offsetLeft
        )}px) translateY(${Math.floor(offsetTop )}px)`,
        width: clientWidth,
      };
    }
    this.setState({ indicatorWrapperStyle });
  };

  render() {

      const { directoriesList } = this.props;
    const { indicatorWrapperStyle, selectedTabId } = this.state;
    const tabIndicator = (
      <div className="bp3-tab-indicator-wrapper" style={indicatorWrapperStyle}>
        <div className="bp3-tab-indicator" />
      </div>
    );

    return (
      <React.Fragment>
     
        <div
          className="navbar-light bp3-tabs d-sm-none d-md-block 
          "
          ref={this.refHandlers}
        >
          
          <div className='m-auto'> 
         
            <ul className="navbar-nav  bp3-tab-list justify-content-center  ">
              {directoriesList.map(({ title, _id }) => (
                <CategoriesNavItem
                  key={_id}
                  title={title}
                  // handleClick={this.handleTabClick}
                  selected={_id === selectedTabId}
                  id={_id}
                />
              ))}
               {tabIndicator}
             
            </ul>
            
          </div>
          
        </div>
        <hr className="mt-0 " />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ directories: { directoriesList } }) => ({
  directoriesList,
});

const mapDispachToProps = (dispatch) => ({
  loadDirectories: () => dispatch(loadDirectories()),
});

export default connect(mapStateToProps, mapDispachToProps)(CategoriesNav);
