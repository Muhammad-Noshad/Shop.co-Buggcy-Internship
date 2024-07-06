import "../../styles/profile/view-profile.css";

import { useEffect, useRef, useState, useCallback } from "react";

import { useFormik } from "formik";
import useUserStore from "../../hooks/userStore";
import API from "../../hooks/useAPI";
import { Link } from "react-router-dom";
import { editProfilePicSchema } from "../../form-schemas/edit-profile-pic-schema";

import Message from "../general/Message";
import FormField from "../checkout/FormField";

async function logout(){
  await API.delete("/token/delete", {
    withCredentials: true
  })
  .then((res) => {
    if(res.data.success){
      window.location.reload();
    }
  })
  .catch((err) => {
    console.log("An error occurred!", err);
  })
}

const ViewProfile = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
    
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState();
  const [color, setColor] = useState();

  const editProfilePic = useRef(null);

  const onSubmit = useCallback(async function ({ profilePic }){  
    await API.patch("/profile/edit/profile-pic", {
      profilePic,
      email: user.email,
    }, 
    { 
      headers: { 
        'Content-Type': 'multipart/form-data' 
      }
    })
    .then((res) => {
      setMessage(res.data.message);
      if(res.data.success){
        setColor("green");
        setUser(res.data.user);
      }
      else{
        setColor("red");
      }
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false) 
      }, 1200);
    })
    .catch((err) => {
      console.log("An error occurred!", err);
    });
  }, [])

  const { errors, handleBlur, handleSubmit, touched, isSubmitting, setFieldValue } = useFormik({
    initialValues: {
      profilePic: "",
    },
    validationSchema: editProfilePicSchema,
    onSubmit: onSubmit,
  });

  // Should I memoize it or not?
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue("profilePic", file);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant"});
  }, []);

  return (
    <div className="view-profile container">
      {
        display && <Message message={message} color={color}/ >
      }
      <div className="left-section">
        <img src={require("../../images/edit.png")} alt="edit.png" className="icon" onClick={() => { editProfilePic.current.classList.toggle("hide"); }} />
        <img src={user.profilePic} alt="profile.png" />
      </div>
      <div className="right-section">
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
        <label>Email:</label>
        <p>{user.email}</p>
        <label>Phone No:</label>
        <p>{user.phoneNo || "Not Specified"}</p>
        <label>Date of Birth:</label>
        <p>{user.dateOfBirth?.split("T")[0] || "Not Specified"}</p>
      </div>
      <div className="bottom-section">
        <Link to="/profile/edit-personal-info">
          <button>Edit Personal Info</button>
        </Link>
        <Link className={ user.phoneNo? "" : "hide" } to="/profile/edit-account-info">
          <button>Edit Account Info</button>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
      <div ref={editProfilePic} className="edit-profile-pic hide">
        <img src={require("../../images/cross.png")} alt="cross.png" className="icon" onClick={ () => { editProfilePic.current.classList.toggle("hide"); } } />
        <form 
          onSubmit={handleSubmit}
          autoComplete="off"
          className={isSubmitting ? "disabled" : ""}
          encType="multipart/form-data">
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default ViewProfile;