import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Logout from './components/logout/logout.component';
import CategoryPage from './pages/category/CategoryPage.component';
import CategoriesNav from './components/categories-nav/categories-nav.component';
import Footer from './components/footer/footer.component';
import ProductPage from './pages/product/product-page.component';
import CheckoutPage from './pages/checkout/checkout.page';
import { userSet } from './store/auth-slice/auth'

import * as authService from './services/authService';

import "./utils/scripts/nav-hide";
import checkoutPage from './pages/checkout/checkout.page';
// import { render } from 'react-dom';

class App extends Component {


  componentDidMount() {
    const { userSet } = this.props;
    try {
      const user = authService.getCurrentUser();
      userSet(user);


    } catch (error) {
      console.log('error' + error);
    }


  }
  render() {
    return (
      <div>
        <Header />
        
        <Switch>
        
          <Route exact path='/' render={(props)=>this.renderWithCategoriesNav(<HomePage {...props}/>,props) } />
          <Route path='/shop' render={(props)=>this.renderWithCategoriesNav(<ShopPage {...props} />,props) } />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />
          <Route path='/logout' component={Logout} />
          <Route path='/checkout' render={(props)=>this.renderWithCategoriesNav(<CheckoutPage/>,props)} />
          <Route path='/categories/:category' render={(props)=>this.renderWithCategoriesNav(<CategoryPage {...props}/>,props) } />
          <Route path='/:category/:id' render={(props)=>this.renderWithCategoriesNav(<ProductPage {...props}/>,props) } />
         

        </Switch>
        <Footer/>
      </div>);
  }

renderWithCategoriesNav=(reactComponent,props)=>(<React.Fragment><CategoriesNav {...props}/>{reactComponent}</React.Fragment>)
}
const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser
})

const mapDispachToProps = dispatch => ({
  userSet: user => dispatch(userSet(user))
});

export default connect(mapStateToProps, mapDispachToProps)(App);

//   <Route path='/categories/:category' component={CategoryPage} />

