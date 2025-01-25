import React from "react";
import CardFollower from "./CardFollower"; // Import the follower card component
import style from "./CardFollower.module.css";

function FollowerCardList({ followers }) {
  return (
    <div className={style.followerCardList}>
      {followers.map((follower, index) => (
        <CardFollower
          key={index}
          name={follower.name}
          image={follower.photo_profil} // Use photo_profil from the JSON
          recipeCount={follower.recipeCount || 0} // Use recipeCount or default to 0
        />
      ))}
    </div>
  );
}

export default FollowerCardList;
