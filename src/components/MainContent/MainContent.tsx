import React from "react";
import {Posts} from "./Posts/lPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {NewPostType} from "./Posts/lPosts/NewPost/NewPost";

export type MainContentPropTypes = {
    arrayPosts: Array<NewPostType>,
}

export const MainContent = (props: MainContentPropTypes) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts arrayPosts={props.arrayPosts}/>
        </div>
    );
}