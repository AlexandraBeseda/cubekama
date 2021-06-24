import React from "react";
import MainContentStyle from './MainContent.module.css';
import {AllPosts} from "./Posts/AllPosts/AllPosts";


export const MainContent=()=>{
    return(
        <div className={MainContentStyle.content}>
            <div>
                <img className={MainContentStyle.themeImg} src='https://img5.goodfon.ru/wallpaper/nbig/d/4c/osen-nebo-listia-colorful-iaponiia-japan-red-klen-gora-fud-5.jpg'/>
            </div>
            <div>
                ava+description
{/*
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xziIGkclzhD48fUCxhNpPVlA-rgW7wDIboEKN-lIG9m1HZmMy-w8zPSNtTguFprxb0E&usqp=CAU'/>
*/}
            </div>
           <AllPosts/>
        </div>

    );
}