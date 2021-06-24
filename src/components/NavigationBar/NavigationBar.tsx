import React from "react";
import NavigationBarStyle from './NavigationBar.module.css';

export const NavigationBar = () => {
    return (
        <nav className={NavigationBarStyle.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}