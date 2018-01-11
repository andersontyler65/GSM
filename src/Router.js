import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import ProfilePage from './components/ProfilePage';
import TeamsList from './components/TeamsList';
import GamesList from './components/GamesList';
import UserProfile from './components/UserProfile';
import MapPage from './components/MapPage';

 const RouterComponent = () => {
   return (
      <Router sceneStyle={{ paddingTop: 65}}>
       <Scene key="auth" >
         <Scene
           key="login"
           component={LoginForm}
           title="Please LogIn"
          />
         </Scene>

         <Scene key="Main">
           <Scene
            rightTitle="Add"
            key="ProfilePage"
            component={ProfilePage}
            title="Game Set Match"
            initial
           />
           <Scene
             key="addFavorite"
             component={TeamsList}
             title="Add Favorites"
           />
           <Scene
             key="selectGames"
             component={GamesList}
             title="Select A Game"
           />
           <Scene
             key="location"
             component={MapPage}
             title="Find Watch Parties"
           />
           <Scene
             key="userProfile"
             component={UserProfile}
             title="Profile"
           />
         </Scene>

      </Router>
    )
  }

export default RouterComponent
