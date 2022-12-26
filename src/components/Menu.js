import '../styles/menu.css';
import React, {useState} from 'react';
import logo from '../images/logo-ig.png';
import homeIcon from '../images/home-ig.png';
import searchIcon from '../images/search-ig.png';
import exploreIcon from '../images/explore-ig.png';
import reelsIcon from '../images/reels-ig.png';
import messagesIcon from '../images/messenger-ig.png';
import notificationsIcon from '../images/noti-ig.png';
import createIcon from '../images/create-ig.png';


const Menu = (props) => {

    return (
        <div className="container">
            <div className="menu">
                <div className="wrap-logo">
                    <img className="logoInstagram" src={logo}></img>
                </div>
                <div className="wrap-list">
                    <div className="home">
                        <img className="homeIcon" src={homeIcon}></img>
                        <span className="homeText">Home</span>
                    </div>
                    <div className="search">
                        <img className="searchIcon" src={searchIcon}></img>
                        <span className="searchText">Search</span>
                    </div>
                    <div className="explore">
                        <img className="exploreIcon" src={exploreIcon}></img>
                        <span className="exploreText">Explore</span>
                    </div>
                    <div className="reels">
                        <img className="reelsIcon" src={reelsIcon}></img>
                        <span className="reelsText">Reels</span>
                    </div>
                    <div className="messages">
                        <img className="messagesIcon" src={messagesIcon}></img>
                        <span className="messagesText">Messages</span>
                    </div>
                    <div className="notifications">
                        <img className="notificationsIcon" src={notificationsIcon}></img>
                        <span className="notificationsText">Notifications</span>
                    </div>
                    <div className="create">
                        <img className="createIcon" src={createIcon}></img>
                        <span className="createText">Create</span>
                    </div>
                    <div className="profile">
                        <img className="profilePic" src={props.dataFromParent}></img>
                        <span className="profileText">Profile</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Menu;