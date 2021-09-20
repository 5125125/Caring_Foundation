import React from 'react';
import './App.css';
import Contact from './components/contact.js';
import Navbar from './components/navbar.js';
import Home from './components/home.js';



import { Route, Switch } from "react-router-dom";
import About from './components/about.js';

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/About" component={About}>
          <About />
        </Route>
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>
      </Switch>
      <div className="footer">
        <p style={{fontSize:'1.6rem',marginTop:'.5rem'}}>
           © Copyright 2021 CARING FOUNDATION <i className="fa fa-gratipay"></i></p>
        <h3>by : SUNITA SINGH </h3>
      </div>
   </>
      )
}

   export default App;
