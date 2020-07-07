import "./sign-up.styles.scss";
import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import * as userService from "../../services/userService";
import * as authService from "../../services/authService";

import validate from "../../services/validation/validateUser";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
  noErrors = () => {
    const { errors } = this.state;
    return !(
      errors.username &&
      errors.email &&
      errors.password &&
      errors.confirmPassword
    );
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { errors } = this.state;

    if (this.noErrors())
      try {
        const { headers } = await userService.register(this.state.user);
        authService.loginWithJwt( headers["x-auth-token"]);
        window.location = "/";
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          const errors = { ...this.state };
          errors.email = ex.response.data;
          this.setState({ errors });
        }
      }

    this.setState((state, props) => {
      return {
        user: { email: "", password: "", username: "", confirmPassword: "" },
      };
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState((state, props) => {
      const user = { ...this.state.user };
      const errors = { ...state.errors };

      user[name] = value;

      if (!value) {
        errors[name] = "";
      } else if (name === "confirmPassword") {
        errors[name] =
          user.password !== user.confirmPassword
            ? "this field must match password"
            : "";
      } else {
        errors[name] = validate[name](value).error
          ? validate[name](value).error.details[0].message
          : "";
      }

      return { errors, user };
    });

    // console.log(this.state.isConfirmed);errors:{email: '', password: '',name:'',confirmPassword:''
  };

  render() {
    const { user, errors } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="username"
            type="username"
            handleChange={this.handleChange}
            value={user.username}
            errors={errors.username}
            label="username"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={user.email}
            errors={errors.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={user.password}
            errors={errors.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="Password"
            value={user.confirmPassword}
            errors={errors.confirmPassword}
            handleChange={this.handleChange}
            label="confirmPassword"
            required
          />

          <CustomButton type="submit"> SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
