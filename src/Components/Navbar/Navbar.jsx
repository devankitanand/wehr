

import "./Navbar.css";
import union from "../../assets/images/Union.svg";
import frame10 from "../../assets/images/Frame10.svg";
import vector from "../../assets/images/Vector.svg";
import msg from "../../assets/images/msg.svg";
import defaultProfilePicture from "../../assets/images/Mask_group.svg"; 
import menu from "../../assets/images/menu.svg";
import { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Navbar() {
  const [profile, setProfile] = useState({
    name: "Ankit Anand",
    profilePic: defaultProfilePicture
  });

  useEffect(() => {
    // Fetch profile data from the backend
    axios.get(`${backendUrl}/profile`)
      .then(response => {
        const { name, profilePic } = response.data;
        setProfile({
          name: name || "Ankit Anand",
          profilePic: profilePic ? `${backendUrl}/uploads/${profilePic}` : defaultProfilePicture
        });
      })
      .catch(error => {
        console.error("There was an error fetching the profile data!", error);
      });
  }, []);

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profilePic", file);

      axios.post(`${backendUrl}/updateProfile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(({ data: { profilePic } }) => {
        setProfile(prevProfile => ({
          ...prevProfile,
          profilePic: `${backendUrl}/uploads/${profilePic}`
        }));
      })
      .catch(error => {
        console.error("There was an error updating the profile picture!", error);
      });
    }
  };

  const handleNameUpdate = () => {
    const newName = window.prompt("Enter the new name:");
    if (newName) {
      axios.post(`${backendUrl}/updateProfile`, { name: newName })
        .then(() => {
          setProfile(prevProfile => ({
            ...prevProfile,
            name: newName
          }));
        })
        .catch(error => {
          console.error("There was an error updating the name!", error);
        });
    }
  };

  const handlePushNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Wehr Notification', {
        body: 'You have a notification!',
        icon: profile.profilePic
      });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Wehr Notification', {
            body: 'You have a notification!',
            icon: profile.profilePic
          });
        }
      });
    }
  };

  return (
    <div className="navbar-main-div">
      <img src={menu} className="menu" alt="menu" />

      <div className="serach-box">
        <input type="text" placeholder="Search" />
        <img src={union} alt="search" />
      </div>

      <div className="account-box">
        <div className="nav-item" onClick={handlePushNotification}>
          Push Notification
        </div>
        <div className="nav-item">
          <img alt="recruitment" src={vector} />
        </div>
        <div className="nav-item">
          <img alt="recruitment" src={msg} />
        </div>
        <div className="nav-item">
          <img
          className="dp"
            alt="profile"
            src={profile.profilePic}
          />
        </div>
        <div className="nav-item option">
          <h3>{profile.name}</h3>
          <img alt="dropdown" src={frame10} />
        </div>

        <div className="dropdown-content">
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicUpload}
              style={{ display: "none" }}
              id="profilePicUpload"
            />
            <label htmlFor="profilePicUpload">Edit profile picture</label>
          </div>
          <div onClick={handleNameUpdate}>Edit name</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

