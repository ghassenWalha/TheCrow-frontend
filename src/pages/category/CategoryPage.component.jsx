import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  loadProducts,
  sortProductsByDate,
  sortProductsByPricedescending,
  sortProductsByAscendingPrice,
} from "../../store/products-slice/products";

class CategoryPage extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;

    this.props.loadProducts(category, "");
    this.setState({ itemsList: this.props.itemsList });
  }
  componentDidUpdate({ match: { params } }) {
    const { category } = this.props.match.params;

    if (params.category !== category) this.props.loadProducts(category, "");
  }
  handleChange = (element) => {
    const {
     
      ByPricedescending,
      ByAscendingPrice,
    } = this.props;
    console.log(element.target.value);
    if(element.target.value ==='l-h')
    {ByAscendingPrice();}
    else if(element.target.value ==='h-l')
    ByPricedescending();
  ;
  };

  render() {
    const {
      itemsList,
      sortProductsByDate,
     
    } = this.props;

    return (
      <div className="container ">
        <div className="row justify-content-between">
          <ul className="nav ">
            <li
              onClick={sortProductsByDate}
              className="nav-item nav-link "
            >
              New
            </li>
            <li className="nav-item nav-link">Featured</li>
            <li className="nav-item nav-link">Best seller</li>
          </ul>
          <ul className="nav ">
            <li className="nav-item nav-link">Sort by</li>
            <li className="nav-item dropdown">
              <form>
                <select
                  onChange={(event) => this.handleChange(event)}
                  name="cars"
                  className="custom-select"
                >
                  <option defaultValue>select..</option>
                  <option value="h-l">high-low pricing</option>
                  <option value="l-h">low-high pricing</option>
                </select>
              </form>
            </li>
          </ul>
        </div>
        <hr className="mt-0" />
        <div className="row">
          {itemsList.map(({ _id, ...otherItemProps }) => (
            <CollectionItem key={_id} id={_id} {...otherItemProps} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products: { itemsList } }) => ({
  itemsList,
});
const mapDispachToProps = (dispatch) => ({
  sortProductsByDate: () => {
    dispatch(sortProductsByDate());
  },
  loadProducts: (query) => dispatch(loadProducts(query)),
  ByPricedescending: () => dispatch(sortProductsByPricedescending()),
  ByAscendingPrice: () =>{ 
    console.log(sortProductsByAscendingPrice());
    dispatch(sortProductsByAscendingPrice())},
});

export default connect(mapStateToProps, mapDispachToProps)(CategoryPage);
