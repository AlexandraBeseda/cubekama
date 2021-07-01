import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemPropTypes = {
    name: string,
    id: number
}
export const DialogItem = (props: DialogItemPropTypes) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    );
}