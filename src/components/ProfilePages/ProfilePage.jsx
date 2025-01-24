import React from 'react'
import TopBar from '../Header/TopBar'
import Banner from './Banner'
import style from '../../assest/css/ProfilePage.module.css'

function ProfilePage() {
  return (
    <div>
        <div className="content">
        <TopBar/>
        </div>
        <Banner />
        <div className={style.tabs}>
        <div className="category_active category">
                <div>Recettes</div>
        </div>
        <div className="category">
                <div>Followers</div>
        </div>
        <div className="category">
                <div>Following</div>
        </div>
        </div>

        <div className={style.showing}>
            

        </div>
    </div>
  )
}

export default ProfilePage