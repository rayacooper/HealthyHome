// NPM packages
import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Local components
import Home from './Views/Home/Home';
import Calendar from './Views/Calendar/Calendar';
import Login from './Views/Login/Login/login';
import Register from './Views/Login/Register/register';
import Homehealth from './Views/Home/Subviews/HomeHealth/HomeHealth'
import Tips from './Views/Home/Subviews/HomeHealth/Tips/Tips';

export default (
    <Switch>
        {/* <NavBar /> */}
        {/* Replace with proper component={} things later */}
        <Route path="/loggedin" component={Homehealth} />
        <Route path="/home" component={Home} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/tips" component={Tips} />
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Login} />
    </Switch>
);