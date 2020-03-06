import React from "react";

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({...this.state, [name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault(); 

    this.setState({ email: "", password: "" });
    console.log('submit');
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput 
            type="password"
            id="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
 
export default SignIn;
