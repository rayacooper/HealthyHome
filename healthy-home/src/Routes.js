// NPM packages
import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Local components
import Home from './Views/Home/Home';
import Calendar from './Views/Calendar/Calendar';
import Login from './Views/Login/Login/login';
import Register from './Views/Login/Register/register';
import HomeHealth from './Views/Home/Subviews/HomeHealth/HomeHealth';
// import NavBar from './Views/Home/NavBar/NavBar';
// import Tips from './Views/Tips/Tips';

export default (
    <Switch>
        {/* <NavBar /> */}
        {/* Replace with proper component={} things later */}
        <Route path="/home" component={Home} />
        <Route path="/homehealth" component={HomeHealth} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/tips" render={()=><div>Tips</div>} />
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Login} />
    </Switch>
);