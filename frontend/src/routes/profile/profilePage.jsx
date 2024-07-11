import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    currentUser && (
      <div className="profile">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <Link to="/profile/update">Update Profile</Link>
            </div>
            <div className="info">
              <span>
                Avatar:{" "}
                <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
              </span>
              <span>
                Username: <strong>{currentUser.username}</strong>
              </span>
              <span>
                Username: <strong>{currentUser.username}</strong>
              </span>
              <button onClick={handleLogout}>logout</button>
            </div>
          </div>
        </div>
        <div className="chat-container">
          <div className="wrapper">{/* Chat here */}</div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
