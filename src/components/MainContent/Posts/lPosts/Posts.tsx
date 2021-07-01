import React from "react";
import s from './Posts.module.css';
import {NewPost, NewPostType} from "./NewPost/NewPost";


export type PostsDataArrayPropTypes ={
    arrayPosts:Array<NewPostType>;
}

export const Posts = (props:PostsDataArrayPropTypes) => {

    let postsElements=props.arrayPosts.map(p=> <NewPost id={p.id} message={p.message} likes={p.likes}/>);//тут должен быть тип!

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Button</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}