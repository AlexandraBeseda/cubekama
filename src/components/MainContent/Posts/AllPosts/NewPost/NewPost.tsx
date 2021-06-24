import React from "react";
import NewPostStyle from './NewPost.module.css';

type NewPostType={
    message:string;
    likes:number;
}

export const NewPost=(props:NewPostType)=>{
    return(
        <div>
            <img className={NewPostStyle.img} src="https://www.meme-arsenal.com/memes/1217413852947b0ec148f82a87e89ddc.jpg" />
            {props.message}
            <div>Likes {props.likes}</div>


        </div>
    );
}