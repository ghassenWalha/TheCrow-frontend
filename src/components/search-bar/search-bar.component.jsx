import React, { Component } from "react";
import { connect } from "react-redux";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

import SearchItem from "../search-item/search-item.component";
import ScrollableDiv from "../../utils/components/scrollable-div/scrollable-div.component";
import { loadSearch, cleanUpItemsList } from "../../store/search-slice/search";

import "./search-bar.styles.scss";
class SearchBar extends Component {
  state = {
    searchInput: "",
    searchSuggestionsClasses: "search-suggestions",
  };

  hundleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ searchInput: value });
    if (value.length > 1) this.props.loadSearch(value);
    else this.props.cleanUp();
  };

  render() {
    const { searchInput } = this.state;
    const { itemsList } = this.props;

    return (
      <React.Fragment>
        <div className="search-bar-container ">
          <input
            type="text"
            value={searchInput}
            className={inputClassesGenerator(itemsList.length, searchInput)}
            onChange={this.hundleInputChange}
            onBlur={this.handleBlur}
          />
          <div className="search-bar-icon">
            <SearchIcon className="search-icon " />
          </div>
          <div className={suggestionsClassesGenerator(itemsList.length)}>
            <div className="hr-custom"></div>
            <ScrollableDiv>
              {this.props.itemsList.map(({ _id, ...otherProps }) => (
                <SearchItem key={_id} id={_id}{...otherProps} />
              ))}
            </ScrollableDiv>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const suggestionsClassesGenerator = (itemsNumber) =>
  itemsNumber
    ? "search-suggestions search-suggestions-on-results"
    : "search-suggestions";

const inputClassesGenerator = (itemsNumber, input) =>
  input.length ? (itemsNumber ? "input-borders-on-results" : "input-borders-on-value") : "";


const mapDispachToProps = (dispatch) => ({
  loadSearch: (searchQuery) => dispatch(loadSearch(searchQuery)),
  cleanUp: () => dispatch(cleanUpItemsList()),
});
const mapStateToProps = ({ search: { itemsList, loading } }) => ({
  itemsList,
  loading,
});
export default connect(mapStateToProps, mapDispachToProps)(SearchBar);
