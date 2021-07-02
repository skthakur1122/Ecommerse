//import logo from './logo.svg';

import React from 'react';
import './App.css';
import {connect} from 'react-redux';
//import './pages/homepage/homepage.style.scss';
import HomePage from './pages/homepage/homepage.component';

import {Switch, Route} from 'react-router-dom';
import ShopPage  from './pages/Shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
//import auth from './firebase/firebase.utils';
 import {createUserProfileDocument, auth} from './firebase/firebase.utils'; 
  import {setCurrentUser} from './redux/user/user.action';

 


  class App extends React.Component {
    unsubscribeFromAuth = null;
  
    componentDidMount() {
      const { setCurrentUser } = this.props;
  
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }
  
        setCurrentUser(userAuth);
      });
    }
  
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }
  
    render() {
      return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
      );
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(App);