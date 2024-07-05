import "../../styles/profile/view-profile.css";
import useUserStore from "../../hooks/userStore";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

async function deleteToken(){
  await axios.delete("http://localhost:8000/token/delete", {
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant"});
  }, []);

  return (
    <div className="view-profile container">
      <div className="left-section">
        <img src={require("../../images/edit.png")} alt="edit.png" className="icon" />
        <img src={user.profilePic} alt="profile.png" />
      </div>
      <div className="right-section">
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
        <label>Email:</label>
        <p>{user.email}</p>
        <label>Phone No:</label>
        <p>{user.phoneNo}</p>
        <label>Date of Birth:</label>
        <p>{user.dateOfBirth.split("T")[0]}</p>
      </div>
      <div className="bottom-section">
        <Link to="/profile/edit-personal-info">
          <button>Edit Personal Info</button>
        </Link>
        <Link to="/profile/edit-account-info">
          <button>Edit Account Info</button>
        </Link>
        <button onClick={deleteToken}>Logout</button>
      </div>
    </div>
  );
}
 
export default ViewProfile;