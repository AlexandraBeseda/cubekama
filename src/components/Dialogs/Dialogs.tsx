import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem, DialogItemPropTypes} from "./DialogsItem/DialogsItem";
import {Message, MessagePropTypes} from "./Message/Message";


export type DialogsPropTypes = {
    arrayDialogs: Array<DialogItemPropTypes>,
    arrayMessage: Array<MessagePropTypes>,
}

export const Dialogs = (props: DialogsPropTypes) => {


    let dialogsElements = props.arrayDialogs.map(d => <DialogItem name={d.name} id={d.id}/>);//тут должен быть тип!
    let messagesElements = props.arrayMessage.map(m => <Message id={m.id} message={m.message}/>);//тут должен быть тип!


    return (
        <div className={s.tableDialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}