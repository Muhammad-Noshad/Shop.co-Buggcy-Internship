import "../../styles/authentication/sign-up.css";
import "../../styles/general/form.css";
import Message from "../general/Message";

import { useFormik } from "formik";
import { signUpFormSchema } from "../../form-schemas/sign-up-form-schema";
import FormField from "../checkout/FormField";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  async function onSubmit({ firstName, lastName, phoneNo, dateOfBirth, profilePic, email, password }){
    await axios.post("http://localhost:8000/sign-up", {
      firstName,
      lastName,
      phoneNo,
      dateOfBirth,
      profilePic,
      email,
      password
    }, { headers: { 'Content-Type': 'multipart/form-data' }})
    .then((res) => {
      setMessage(res.data.message);
      if(res.data.success){
        setColor("green");
      }
      else{
        setColor("red");
      }
      setDisplay(true);
      setTimeout(() => {setDisplay(false)}, 1200);
    })
    .catch((err) => {
      console.log("An error occurred!", err);
    })
  }

  const { values, errors, handleChange, handleBlur, handleSubmit, touched, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNo: "",
      dateOfBirth: "",
      profilePic: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpFormSchema,
    onSubmit: onSubmit,
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue("profilePic", file);
  };

  return (
    <div className="sign-up-wrapper">
      <div className="sign-up-form">
        {display && <Message message={message} color={color} />}
        <img src={require("../../images/shop-co.png")} alt="shop-co.png" />
        <h1>Welcome👋</h1>
        <p
          style={{
            textAlign: "center",
            marginBottom: "2em",
          }}
        >
          Sign up to continue{" "}
        </p>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className={isSubmitting ? "disabled" : ""}
          encType="multipart/form-data"
        >
          <FormField
            label="First Name"
            type="text"
            id="firstName"
            className={
              errors.firstName && touched.firstName ? "input-error" : ""
            }
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.firstName && touched.firstName ? errors.firstName : false
            }
          />
          <FormField
            label="Last Name"
            type="text"
            id="lastName"
            className={errors.lastName && touched.lastName ? "input-error" : ""}
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.lastName && touched.lastName ? errors.lastName : false
            }
          />
          <FormField
            label="Phone No"
            type="tel"
            id="phoneNo"
            className={errors.phoneNo && touched.phoneNo ? "input-error" : ""}
            value={values.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phoneNo && touched.phoneNo ? errors.phoneNo : false}
          />
          <FormField
            label="Date of Birth"
            type="date"
            id="dateOfBirth"
            className={
              errors.dateOfBirth && touched.dateOfBirth ? "input-error" : ""
            }
            value={values.dateOfBirth}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.dateOfBirth && touched.dateOfBirth
                ? errors.dateOfBirth
                : false
            }
          />
          <FormField
            label="Profile Picture"
            type="file"
            accept="image/*"
            id="profilePic"
            className={
              errors.profilePic && touched.profilePic ? "input-error" : ""
            }
            value={undefined}
            onChange={handleFileChange}
            onBlur={handleBlur}
            error={
              errors.profilePic && touched.profilePic
                ? errors.profilePic
                : false
            }
          />
          <FormField
            label="Email"
            type="email"
            id="email"
            className={errors.email && touched.email ? "input-error" : ""}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email ? errors.email : false}
          />
          <FormField
            label="Password"
            type="password"
            id="password"
            className={errors.password && touched.password ? "input-error" : ""}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.password && touched.password ? errors.password : false
            }
          />
          <FormField
            label="Confirm Password"
            placeholder="Enter your Password again"
            type="password"
            id="confirmPassword"
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : false
            }
          />
          <Link to="/sign-in">
            <p
              style={{
                textAlign: "center",
                marginTop: "2em",
              }}
            >
              <strong>
                <u>Already have an account? Sign in now!</u>
              </strong>
            </p>
          </Link>
          <button
            disabled={isSubmitting}
            className={isSubmitting ? "disabled" : ""}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
 
export default SignUp;