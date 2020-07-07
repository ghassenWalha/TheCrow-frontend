import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/configureStore';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
 ,
  document.getElementById('root')
);
