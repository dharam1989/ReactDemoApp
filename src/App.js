import React, { Component } from 'react';
import './App.css';
//import {Route, Switch  } from 'react-router-dom'
import routes from './routes';
import Header from './common/Header';
import Footer from './common/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="main-container">
           {routes}
        </div>
        <Footer/>
    </div>
    );
  }
}

export default App;
