import React from 'react';
import style from './uibar.module.scss';
import {notification} from "../images/notification-icon.png"
import {setting} from "../images/setting-icon.png"
import {logout} from "../images/logout-icon.png"
import {user_icon} from "../images/user-icon.png"

/*BUG: Gatsby doesn't render our icnons
WARNING: The search bar no work....yet

This Component need more work to be optimized*/

const UiBar = (props) => (
    <nav className = {style.Bar}>
        <div>
            <img alt = "logo"/>
        </div>
    
        <form method = "GET">
            <input type = "search" name = "srch"/>
            <button>Search</button>
        </form>
        <figure>
            <img src = {notification} alt = "notificaciones"/>
            <div>
                <p>Notificaciones</p>
                <ul>
                    {props.notification}
                </ul>
            </div>
        </figure>
        
        <figure>
            <img alt = "mensaje"/>
        </figure>
    
        <figure>
            <img src = {setting} alt = "engranaje-config"/>
            <div>
                <ul>
                    <li><img alt = "user" src = {user_icon}/></li>
                    <li>Account Setting</li>
                    <li><img alt = "logout" src = {logout}/></li>
                </ul>
            </div>
        </figure>
    </nav>
)

export default UiBar