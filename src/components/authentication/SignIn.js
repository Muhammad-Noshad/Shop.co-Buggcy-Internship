import "../../styles/authentication/sign-in.css";
import "../../styles/general/form.css";

import { useFormik } from "formik";
import { signInFormSchema } from "../../form-schemas/sign-in-form-schema";
import FormField from "../checkout/FormField";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import Message from "../general/Message";
import useUserStore from "../../hooks/userStore";

const SignIn = () => {
  const history = useHistory();
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  async function onSubmit({ email, password }){
    await axios.post("http://localhost:8000/sign-in", {
      email,
      password
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  withCredentials: true})
    .then((res) => {
      if(res.data.success){
        history.push("/");
        setColor("green");
        setUser(res.data.user);
      }
      else{
        setMessage(res.data.message);
        setColor("red");
        setDisplay(true);
        setTimeout(() => {setDisplay(false)}, 1200);
      }
    })
    .catch((err) => {
      console.log("An error occurred!", err);
    })
  }

  const { values, errors, handleChange, handleBlur, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInFormSchema,
    onSubmit: onSubmit,
  });

  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-form">
    {
      display && <Message message={ message } color={ color } />
    }
    <img src={require("../../images/shop-co.png")} alt="shop-co.png" />
    <h1>Welcome Back👋</h1>
    <p style={{
      "textAlign":"center",
      "marginBottom": "2em"
      }}>Sign in to continue </p>
    <form onSubmit={handleSubmit} autoComplete="off" className={isSubmitting? "disabled":""}>
      <FormField 
        label="Email" 
        type="email" 
        id="email" 
        className={ errors.email && touched.email? "input-error":""} 
        value={ values.email } 
        onChange={ handleChange } 
        onBlur={ handleBlur } 
        error={ errors.email && touched.email? errors.email:false } 
      />
      <FormField 
        label="Password" 
        type="password" 
        id="password" 
        className={ errors.password && touched.password? "input-error":""} 
        value={ values.password } 
        onChange={ handleChange } 
        onBlur={ handleBlur } 
        error={ errors.password && touched.password? errors.password:false } 
      />
      <Link to="/sign-up">
      <p style={{
        "textAlign":"center",
        "marginTop": "2em"
        }}><strong><u>Don't have an account? Sign up now!</u></strong></p>
      </Link>
      <button disabled={ isSubmitting } className={ isSubmitting? "disabled":"" } type="submit">Sign In</button>
    </form>
    
    </div>
    </div>
  );
}
 
export default SignIn;