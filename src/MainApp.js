import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';


const MainApp = (props) => {
    return (
        <div>
            <Header />
            <NavBar />

            <Route path='/about-us' component={About} />
            <Route path='/' component={Home} />
        </div>
    );
}