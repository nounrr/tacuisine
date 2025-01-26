import React from "react";
import { useSelector } from "react-redux";
import style from "../../assest/css/ProfilePages/Banner.module.css";

function Banner() {
  // Récupération de l'utilisateur connecté
  const authUser = useSelector((state) => state.auth.user);

  const user = useSelector((state) =>
    state.users.users.find((u) => u.username === authUser?.username)
  );
  return (
    <div className={style.banner_profile}>
      <div className={style.profile_info}>
        <img src={user?.profileImage || "/img/bg1.jpg"} alt="Profile" />
        <h1 className={style.name}>{user?.username || "Utilisateur"}</h1>
     </div>
      <div className={style.overlay}></div>
    </div>
  );
}

export default Banner;
