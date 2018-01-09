import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import HappyDay from './components/HappyDay';
// import { Text, View, Button, Card, CardSection } from 'react-native';

// View are made up of smaller components that comprise the total view page on the screen of a users device.
// The app navigates between views.

 const RouterComponent = () => {
   return (
      <Router sceneStyle={{ paddingTop: 65}}>
       <Scene key="auth" >
         <Scene
           key="login"
           component={LoginForm}
           title="Please Log In"
          //  hideNavBar
          //  initial
           />
         </Scene>

         <Scene key="Main">
           <Scene
             rightTitle="Add Favorites"
             key="Success"
             title="Welcome"
             component={HappyDay}
             initial
           />
         </Scene>
      </Router>
    )
  }

export default RouterComponent
