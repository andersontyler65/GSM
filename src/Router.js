import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { Text, View, Button, Card, CardSection } from 'react-native';

import LoginForm from './components/LoginForm';
import HappyDay from './components/HappyDay';
// import UserView from './views/UserView'
// import ActivityIndicatorView from './views/ActivityIndicatorView'
// View are made up of smaller components that comprise the total view page on the screen of a users device.
// The app navigates between views.

class RouterComponent extends Component {

  render() {
   return (
      <Router>
       <Scene key="root" >
         <Scene
           key="LoginForm"
           component={LoginForm}
           hideNavBar
           initial
           />
         <Scene
           key="Success"
           component={HappyDay}
           hideNavBar
           />
         </Scene>
         {/* <Scene
           key='UserView'
           component={UserView}
           panHandlers={null}
           title='Back'
           hideNavBar
           /> */}
         {/* <Scene
           key='VenueDetailView'
           component={VenueDetailView}
           title=''
           navigationBarStyle={{backgroundColor: 'rgba(255, 255, 255, 1)'}}
           />
         <Scene
           key='NativeMapView'
           component={NativeMapView}
           title={this.props.searchTerm}
           navigationBarStyle={{backgroundColor: 'rgba(117,206,182,1)'}}
           />
        </Scene> */}
      </Router>
    )
  }
}

export default RouterComponent
