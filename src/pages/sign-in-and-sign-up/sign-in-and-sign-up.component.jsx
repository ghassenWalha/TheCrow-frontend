import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = (props) => (
  <div className="container mt-5">
  <div className='sign-in-and-sign-up row'>
    <div className="col-5 ">
    <SignIn {...props}/>
    </div>
    <div className="col-2"></div>
    <div className="col-5">
      <SignUp {...props}/>
    </div>
  </div>
  </div>

);

export default SignInAndSignUpPage;
