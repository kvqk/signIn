import React, { useState } from "react";
import * as yup from "yup";
import { EmailInput } from "../Email-Input";
import { NameInput } from "../Name-input";
import { AgeInput } from "../Age-input";
import { PasswordInput } from "../Password-input";
import { DOBInput } from "../DOB-Input";
import { ConfirmPassWordInput } from "../ConfirmPassword-input";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, collection, setDoc } from "firebase/firestore";
import "./SignUp.css";

// declare variable named initialValues
// put the input names to string
//example: password : ""
const initialValues = {
  name: "",
  email: "",
  age: "",
  password: "",
  confirmPassword: "",
  dob: "",
};
// declare variable named validationSchema, it equals to yup.object,it takes nothing then .shape
//name: yup, name is string() minimum characters is 4 , then error message
// email: yup.string takes ().email takes nothing.required takes nothing
//age: yup is number, minimum 18 and error messsage, outside the parenthisis put .typeError and it takes string
//password yup, it is a string, minnimum is 8,
//dob: yup.string().test (error msg)
//const newDob is equal to value.substring(0,4)
// if (Number(newdob) >= 2004)
//return false
//else return true
//confirmPassword, yup string(),required
const validationSchema = yup.object().shape({
  name: yup.string().min(4, "Name must be more than 4 letters."),
  email: yup.string().email().required(),
  age: yup.number().min(18, "Must be 18 or older.").typeError(""),
  password: yup.string().min(8, "Password must be atleast 8 characters"),
  dob: yup.string().test("DOB", "Must be 2004 or more", (value) => {
    const newDob = value.substring(0, 4);
    if (Number(newDob) >= 2004) {
      return false;
    } else {
      return true;
    }
  }),
  confirmPassword: yup.string().required(),
});
//declare signUpForm = () = >
//const form values,setFormValues in array, is equal to useState initial values
// const formError setFormError in array, is equal to useState({...initialValues. required ""})
export const SignUpForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({
    ...initialValues,
    required: "",
  });

  // decalre handleInputChange, is equal to event =>
  // const name equals to event target name
  //const value, and do the same thing
  //yup
  //.reach validationSchema, name
  //validate value
  //then takes valid =>
  //setFormValues takes ..formValues, name in array: value
  //setFormError ... form error, name in array: ""
  //catch takes err =>
  //setFormError ({...formError, name in array: ""})
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    yup
      .reach(validationSchema, name)
      .validate(value)
      .then((valid) => {
        setFormValues({ ...formValues, [name]: value });
        setFormError({ ...formError, [name]: "" });
      })
      .catch((err) => {
        setFormError({ ...formError, [name]: err.message });
      });
  };
  //declare Variable named handleSubmit  it equals to async =>
  // make an iff statement that takes formValues.password Not equal to formValues.confirmPassword
  //setForm error takes ...formError. then make the error message using "password:
  //make another if statement using formValues.name and all the other inputs === "" ||
  const handleSubmit = async () => {
    if (formValues.password !== formValues.confirmPassword) {
      setFormError({
        ...formError,
        password: "Password and confirm password must match",
      });
    }
    //make another if statement using formValues.name and all the other inputs === "" ||
    // setFormError in parenthis and object ...formError, required, then put error message
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.age === "" ||
      formValues.dob === "" ||
      formValues.password === "" ||
      formValues.confirmPassword === ""
    ) {
      setFormError({ ...formError, required: "All inputs must be filled" });
    }
    // use await createUserWithEmailAndPassword
    //auth formValues email
    //then do formValues.password
    await createUserWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    )
      // use .then, it takes async and response
      // const userInfo
      //uid response user uid
      //then put name, email, age, dob, and put formValues. then what ever input you're putting formValues on
      //like formValues.name
      .then(async (response) => {
        const userInfo = {
          uid: response.user.uid,
          name: formValues.name,
          email: formValues.email,
          age: formValues.age,
          dob: formValues.dob,
        };
        //const usersRef equal do doc, doc takes collection(db, "users")
        //then await setDoc, it takes usersRef and userInfo
        const usersRef = doc(collection(db, "users"));
        await setDoc(usersRef, userInfo);
      })
      // catch takes err => setFormError, it takes an object with ..formError, required and err.message
      .catch((err) => setFormError({ ...formError, required: err.message }));
  };

  return (
    <div id="background">
      <div id="form">
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
        <button id="submitButton" onClick={() => handleSubmit()}>
          Submit
        </button>
        <p id="inputError">{formError.required}</p>
      </div>
    </div>
  );
};
