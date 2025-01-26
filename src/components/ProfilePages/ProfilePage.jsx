import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "./Banner";
import "../../assest/css/ProfilePages/ProfilePage.css";
import { updateUser } from "../../Redux/userSlice";
import { signIn } from "../../Redux/authSlice";
import { updateRecettesByUser } from "../../Redux/recettesSlice";
import Header from "../Header/Header";

function ProfilePage() {
  const dispatch = useDispatch();

  const authUser = useSelector((state) => state.auth.user);
  const user = useSelector((state) =>
    state.users.users.find((u) => u.username === authUser?.username)
  );

  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    ville: user?.ville || "",
    dateOfBirth: user?.dateOfBirth || "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    if (user) {
      dispatch(updateUser({ id: user.id, updates: formData }));

      dispatch(signIn({ ...authUser, ...formData }));

      if (user.username !== formData.username) {
        dispatch(
          updateRecettesByUser({
            oldUsername: user.username,
            newUsername: formData.username,
          })
        );
      }

    }
  };

  return (
    <div className="content">
      <Header />
      <div className="profile-header">
        <h2 className="title blue">Modifier le Profil</h2>
      </div>
      <div className="profile-form">
        <Banner />
        <div className="inputGroup">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            className="input"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label>Email</label>
          <input
            type="email"
            className="input"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label>Ville</label>
          <input
            type="text"
            className="input"
            value={formData.ville}
            onChange={(e) => handleChange("ville", e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label>Date de naissance</label>
          <input
            type="date"
            className="input"
            value={formData.dateOfBirth}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          />
        </div>
      </div>
      <div className="profile-footer">
        <button className="saveButton" onClick={handleSave}>
          Sauvegarder
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
