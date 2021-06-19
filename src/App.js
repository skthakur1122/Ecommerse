//import logo from './logo.svg';

import React from 'react';
import './App.css';
//import './pages/homepage/homepage.style.scss';
import HomePage from './pages/homepage/homepage.component';

import {Switch, Route} from 'react-router-dom';
import ShopPage  from './pages/Shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
//import auth from './firebase/firebase.utils';
 import {createUserProfileDocument, auth} from './firebase/firebase.utils';


// const HatsPage = () => (
// <div>
// <h1>HATS PAGE</h1>
// </div>

// );

class App extends React.Component {
 constructor (){
super();

this.state = {

  currentUser: null
};

 }
 unsubscribeFromAuth=null;


//  componentDidMount (){
//  this.unsubscribeFromAuth=auth.onAuthStateChanged   (async user => {

//   if (userAuth) {
//     const userRef = await  createUserProfileDocument(userAuth);

//     userRef.onSnapshot(snapShot => {
//       this.setState({
//         currentUser: {
//           id: snapShot.id,
//           ...snapShot.data()
//         }
//       });

//       console.log(this.state);
//     });
//   }

// this.setState({currentUser: userAuth  });
// console.log(user);


//  });
//  }
//  componentWillUnmount(){
//    this.unsubscribeFromAuth();
//  }



// render(){
//   return (
//     <div >
//     <Header currentUser={this.state.currentUser} />
//     <Switch>
//     <Route exact path='/' component={HomePage} />
//     <Route  path='/Shop' component={ShopPage} />
//     <Route  path='/signin' component={SignInAndSignUpPage} />
//     </Switch>
    
    
      
//     </div>
//   );
// }
  
 
// }
componentDidMount (){
  this.unsubscribeFromAuth=auth.onAuthStateChanged   (async userAuth => {  
 
   if (userAuth) {
     const userRef = await  createUserProfileDocument(userAuth);
 
     userRef.onSnapshot(snapShot => {
       this.setState({
         currentUser: {
           id: snapShot.id,
           ...snapShot.data()
         }
       });
       console.log(this.state);
 
      
     });
     
   }
 
 this.setState({currentUser: userAuth  });
 //c onsole.log(user);
 
 
  });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 
 
 
 render(){
   return (
     <div >
     <Header currentUser={this.state.currentUser} />
     <Switch>
     <Route exact path='/' component={HomePage} />
     <Route  path='/Shop' component={ShopPage} />
     <Route  path='/signin' component={SignInAndSignUpPage} />
     </Switch>
     
     
       
     </div>
   );
 }
   
  
 }

export default App;
