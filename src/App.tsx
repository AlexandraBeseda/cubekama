import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {MainContent} from "./components/MainContent/MainContent";



const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavigationBar/>
            <MainContent/>
        </div>
    );
}


export default App;
