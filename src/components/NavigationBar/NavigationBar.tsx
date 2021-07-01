import React from "react";
import NavigationBarStyle from './NavigationBar.module.css';
import {NavLink} from "react-router-dom";

export const NavigationBar = () => {
    return (
        <nav className={NavigationBarStyle.nav}>
            <div className={NavigationBarStyle.item} >
                <NavLink to="profile" activeClassName={NavigationBarStyle.activeLink}>Profile</NavLink>
            </div>
            <div className={`${NavigationBarStyle.item}`}>
                <NavLink to="dialogs" activeClassName={NavigationBarStyle.activeLink}>Messages</NavLink>
            </div>
            <div className={`${NavigationBarStyle.item}`}>
                <NavLink to="news" activeClassName={NavigationBarStyle.activeLink}>News</NavLink>
            </div>
            <div className={`${NavigationBarStyle.item}`}>
                <NavLink to="music" activeClassName={NavigationBarStyle.activeLink}>Music</NavLink>
            </div>
            <div className={`${NavigationBarStyle.item}`}>
                <NavLink to="settings" activeClassName={NavigationBarStyle.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}