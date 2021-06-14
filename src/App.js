//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import './pages/homepage/homepage.style.scss';
import HomePage from './pages/homepage/homepage.component';

import {Switch, Route} from 'react-router-dom';
import ShopPage  from './pages/Shop/shop.component.jsx';
import Header from './components/header/header.component';

// const HatsPage = () => (
// <div>
// <h1>HATS PAGE</h1>
// </div>

// );

function App() {
  
  return (
    <div >
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route  path='/Shop' component={ShopPage} />
    </Switch>
    
    
    
    </div>
  );
}

export default App;
