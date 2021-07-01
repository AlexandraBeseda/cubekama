import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {MainContent} from "./components/MainContent/MainContent";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {NewPostType} from "./components/MainContent/Posts/lPosts/NewPost/NewPost";
import {DialogItemPropTypes} from "./components/Dialogs/DialogsItem/DialogsItem";
import {MessagePropTypes} from "./components/Dialogs/Message/Message";


export type AppPropTypes={
    arrayPosts:Array<NewPostType>,
    arrayDialogs:Array<DialogItemPropTypes>,
    arrayMessage:Array<MessagePropTypes>,
}

const App = (props:AppPropTypes) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavigationBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=><MainContent arrayPosts={props.arrayPosts}/>}/>
                    <Route path='/dialogs' render={()=><Dialogs arrayDialogs={props.arrayDialogs} arrayMessage={props.arrayMessage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
