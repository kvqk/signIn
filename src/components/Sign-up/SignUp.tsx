/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from "react";
import * as yup from "yup";
import { EmailInput } from "../Email-Input";
import { NameInput } from "../Name-input";
import { AgeInput } from "../Age-input";
import { PasswordInput } from "../PasswordInput";
import { DOBInput } from "../DOB-Input";
import { ConfirmPassWordInput } from "../ConfirmPassword-input";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, collection, setDoc } from "firebase/firestore";
import "./SignUp.css";
const initialValues = {
  name: "",
  email: "",
  age: "",
  password: "",
  confirmPassword: "",
  dob: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().min(4, "Name must be more than 4 letters."),
  email: yup.string().email().required(),
  age: yup.number().min(18, "Must be 18 or older.").typeError(""),
  password: yup.string().min(8, "Password must be atleast 8 characters"),
  dob: yup.string().test("DOB", "Must be 2004 or more", (value) => {
    const newDob = value?.substring(0, 4);
    console.log(newDob);
    if (Number(newDob) >= 2004) {
      return false;
    } else {
      return true;
    }
  }),
  confirmPassword: yup.string().required(),
});

export const SignUpForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({
    ...initialValues,
    required: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    yup
      .reach(validationSchema, name)
      .validate(value)
      .then((valid: any) => {
        setFormValues({ ...formValues, [name]: value });
        setFormError({ ...formError, [name]: "" });
      })
      .catch((err: { errors: string }) => {
        setFormError({ ...formError, [name]: err.errors[0] });
      });
  };
  const handleSubmit = () => async () => {
    if (formValues.password !== formValues.confirmPassword) {
      setFormError({
        ...formError,
        password: "Password and confirm password must match",
      });
    }
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.age === "" ||
      formValues.dob === "" ||
      formValues.password === "" ||
      formValues.confirmPassword === ""
    ) {
      setFormError({ ...formError, required: "All inputs must be filled" });
    } else {
      try {
        console.log(formValues);
      } catch (err: any) {
        // catch takes err => setFormError, it takes an object with ..formError, required and err.message
        setFormError({ ...formError, required: err.message });
      }
    }
  };
  return (
    <div id="background">
      <div id="form">
        <h1 id="signUpTxt">Sign Up</h1>
        <NameInput handleChange={handleInputChange} name="name" />
        <p id="inputError">{formError.name}</p>

        <EmailInput name="email" handleChange={handleInputChange} />
        <p id="inputError">{formError.email}</p>

        <AgeInput name="age" handleChange={handleInputChange} />
        <p id="inputError">{formError.age}</p>

        <DOBInput name="dob" handleChange={handleInputChange} />
        <p id="inputError">{formError.dob}</p>

        <PasswordInput name="password" handleChange={handleInputChange} />
        <p id="inputError">{formError.password}</p>
        <ConfirmPassWordInput
          name="confirmPassword"
          handleChange={handleInputChange}
        />
        <button onClick={handleSubmit()} id="submitButton">
          Submit
        </button>
        <p id="inputError">{formError.required}</p>
      </div>
    </div>
  );
};
