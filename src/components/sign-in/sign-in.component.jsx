import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";
import validate from "../../services/validation/validateUser";

import * as authService from "../../services/authService";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
        serverSideError: "",
      },
    };
  }
  noErrors = () => {
    const { errors } = this.state;
    return !(errors.email && errors.password && errors.serverSideError);
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    if (this.noErrors())
      try {
        await authService.login(this.state.user);
        window.location="/";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          const errors = { ...this.state };
          errors.serverSideError = ex.response.data;
          this.setState({ errors });
        } else {
        }
      }

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState((state, props) => {
      const user = { ...this.state.user };
      const errors = { ...state.errors };

      user[name] = value;

      if (!value) {
        errors[name] = "";
      } else {
        console.log(validate[name](value));
        errors[name] = validate[name](value).error
          ? validate[name](value).error.details[0].message
          : "";
      }

      return { errors, user };
    });

    this.setState({ [name]: value });
  };

  render() {
    const { user, errors } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        {errors.serverSideError ? (
          <div className="alert alert-danger">{errors.serverSideError}</div>
        ) : null}

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={user.email}
          
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={user.password}
           
            handleChange={this.handleChange}
            label="password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
