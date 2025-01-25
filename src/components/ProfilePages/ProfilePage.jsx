import React from 'react'
import TopBar from '../Header/TopBar'
import Banner from './Banner'
import style from '../../assest/css/ProfilePages/ProfilePage.module.css'
import FollowerCardList from'../Followers/Comp/FollowerCardList'
function ProfilePage() {
        const followers = [
                {
                  name: "Aya Ziad",
                  image: process.env.PUBLIC_URL + "./img/bg1.jpg",
                  recipeCount: 20,
                },
                {
                  name: "Hassan Ali",
                  image: process.env.PUBLIC_URL + "./img/bg2.jpg",
                  recipeCount: 15,
                },
                {
                  name: "Sara Karim",
                  image: process.env.PUBLIC_URL + "./img/bg3.jpg",
                  recipeCount: 25,
                },
              ];
  return (
    <div>
        <div className="content">
        <TopBar/>
        </div>
        <Banner />
        <div className={style.tabs}>
        <div className="category category blue">
                <div>Recettes</div>
        </div>
        <div className="category blue">
                <div>Followers</div>
        </div>
        <div className="category blue">
                <div>Following</div>
        </div>
        </div>

        <div className={style.showing}>
        <FollowerCardList followers={followers} />

        </div>
    </div>
  )
}

export default ProfilePage