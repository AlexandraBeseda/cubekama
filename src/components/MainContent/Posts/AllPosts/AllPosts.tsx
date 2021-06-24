import React from "react";
import AllPostsStyle from './AllPosts.module.css';
import {NewPost} from "./NewPost/NewPost";

export const AllPosts = () => {
    return (
        <div>
            My posts
            <div className={AllPostsStyle.item}>
                <textarea></textarea>
                <button>Add Button</button>
            </div>
            <div>
                <NewPost message='Hello!How are you?' likes={10} />
                <NewPost message='I saw you yesterday' likes={30} />
                <NewPost message='Buy some potatoes?' likes={0}  />
            </div>
        </div>
    );
}