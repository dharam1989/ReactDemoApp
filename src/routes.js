import React from 'react';
import {Route, Switch  } from 'react-router-dom'
import Service from './components/Service';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Form from './components/Form';
import About from './components/About';
import Home from './components/Home';
import Registration from './components/user/Registration';
import Login from './components/user/Login';
import Dashboard from './components/user/Dashboard';
export default (
          <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/service' component={Service}/>
                <Route path='/pricing' component={Pricing}/>
                <Route path='/faq' component={Faq}/>
                <Route path='/form' component={Form}/>
                <Route path='/about' component={About}/>
                <Route path='/register' component={Registration}/>
                <Route path='/login' component={Login}/>
                <Route path='/dashboard' component={Dashboard}/>
          </Switch>
);
