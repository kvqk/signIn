import React from "react";
import PasswordInput from "../Password-input";
import EmailInput from "../Email-Input";
import "./SignIn.css";

interface ISignIn {
  name: string,
  ref: any,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  EmailInput: string,
  PasswordInput: any,
}

const SignInForm: React.FC<ISignIn> = () => {
  return (
    <div id="background">
      <div id="form">
        <p style={{ fontFamily: "Sans-serif", fontSize: " 30px" }}>Sign In</p>
        <EmailInput name = "name" />
        <PasswordInput  />
        <button id="button">Sign In</button>
      </div>
    </div>
  );
};

export default SignInForm;
