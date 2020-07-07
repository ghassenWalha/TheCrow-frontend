import React, { Component } from "react";
import { connect } from "react-redux";

import MenuItem from "../menu-item/menu-item.component";
import { loadDirectories } from "../../store/directories-slice/directories";

import "./directory.styles.scss";

class Directory extends Component {
  componentWillMount() {
    this.props.loadDirectories();
  }
  render() {
    return (
      <div className="row">
        {this.props.directoriesList.map(({ _id, ...otherSectionProps }) => (
          <MenuItem key={_id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  directoriesList: state.directories.directoriesList,
});
const mapDispachToProps = (dispatch) => ({
  loadDirectories: () => dispatch(loadDirectories()),
});

export default connect(mapStateToProps, mapDispachToProps)(Directory);
