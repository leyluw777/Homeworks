import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {  faCog } from '@fortawesome/free-solid-svg-icons';
import {  faWallet } from '@fortawesome/free-solid-svg-icons';
import {  faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import avatar from "../img/ava.png";


export class Profile extends Component {
    render() {
        return (
          <div className="profile-page">
              <div className="profile-content">
              <div className="profile-head">
              <Link to="/home" className = "back-i">
                    <FontAwesomeIcon icon= {faArrowLeft}   color="#222B45" />
                    </Link>
                    <h2>My Profile</h2>
                    <span>
                    <FontAwesomeIcon icon= {faEllipsisV}  size="lg" color="#6A515E " />
                         </span>
              </div>

              <div className="profile-info">
                  <img src={avatar} alt="" />
                  <h2>Robert Fox</h2>
                  <p>robertfox@gmail.com</p>
              </div>

<div className="prof-settings">
<FontAwesomeIcon icon= {faCog}  size="2x" color="#6A515E "  className="prof-i" />
<h3>Settings</h3>
<FontAwesomeIcon icon= {faArrowRight}   color="#6A515E" />
</div>


              <div className="prof-payments">
              <FontAwesomeIcon icon= {faWallet}  size="2x" color="#6A515E " className="prof-i" />
<h3>Payments</h3>
<FontAwesomeIcon icon= {faArrowRight}   color="#6A515E" />
              </div>

              <div className="prof-password">
              <FontAwesomeIcon icon= {faUnlockAlt}  size="2x" color="#6A515E " className="prof-i" />
<h3>Password</h3>
<FontAwesomeIcon icon= {faArrowRight}   color="#6A515E" />
              </div>
              </div>
          </div>
        )
    }
}

export default Profile