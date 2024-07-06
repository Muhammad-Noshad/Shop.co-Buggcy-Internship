import "../../styles/profile/edit-account-info.css";
import "../../styles/general/form.css";

import { useFormik } from "formik";
import { EditAccountInfoSchema } from "../../form-schemas/edit-account-info-schema";
import FormField from "../checkout/FormField";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Message from "../general/Message";
import useUserStore from "../../hooks/userStore";

const EditAccountInfo = () => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  async function onSubmit({ oldEmail, oldPassword, newEmail, newPassword }){
    await axios.patch("http://localhost:8000/profile/edit/account-info", {
      oldEmail,
      oldPassword,
      newEmail,
      newPassword,
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    withCredentials: true
    })
    .then((res) => {
      setMessage(res.data.message);
      setDisplay(true);
      if(res.data.success){
        setColor("green");
        setUser(res.data.user);
      }
      else{
        setColor("red");
      }
      setTimeout(() => {setDisplay(false)}, 1200);
    })
    .catch((err) => {
      console.log("An error occurred!", err);
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant"});
  }, []);

  const { values, errors, handleChange, handleBlur, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: {
      oldEmail: "",
      oldPassword: "",
      newEmail: "",
      newPassword: "",
    },
    validationSchema: EditAccountInfoSchema,
    onSubmit: onSubmit,
  });

  return (
    <div className="edit-account-info">
      <div className="sign-up-wrapper">
        <div className="sign-up-form">
          {display && <Message message={message} color={color} />}
          <img src={require("../../images/shop-co.png")} alt="shop-co.png" />
          <h1>Edit Account Info📝</h1>
          <p
            style={{
              textAlign: "center",
              marginBottom: "2em",
            }}
          >
            Provide your old information and new information
          </p>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className={isSubmitting ? "disabled" : ""}
          >
          <p className="title">Old Information</p>
            <FormField
              label="Email"
              type="email"
              id="oldEmail"
              className={errors.oldEmail && touched.oldEmail ? "input-error" : ""}
              value={values.oldEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.oldEmail && touched.oldEmail ? errors.oldEmail : false}
            />
            <FormField
              label="Password"
              type="password"
              id="oldPassword"
              className={errors.oldPassword && touched.oldPassword ? "input-error" : ""}
              value={values.oldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={
                errors.oldPassword && touched.oldPassword ? errors.oldPassword : false
              }
            />
            <p className="title">New Information</p>
              <FormField
                label="Email"
                type="email"
                id="newEmail"
                className={errors.newEmail && touched.newEmail ? "input-error" : ""}
                value={values.newEmail}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.newEmail && touched.newEmail ? errors.newEmail : false}
              />
              <FormField
                label="Password"
                type="password"
                id="newPassword"
                className={errors.newPassword && touched.newPassword ? "input-error" : ""}
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.newPassword && touched.newPassword ? errors.newPassword : false
                }
              />
            <Link to="/profile">
              <p
                style={{
                  textAlign: "center",
                  marginTop: "2em",
                }}
              >
                <strong>
                  <u>Done making changes? Back to Profile</u>
                </strong>
              </p>
            </Link>
            <button 
              disabled={isSubmitting}
              className={isSubmitting ? "disabled" : ""}
              type="submit"
            >
              Submit Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default EditAccountInfo;