import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router'
import HappyDay from './components/HappyDay';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAzr7VRMSJYjInvAZCjrVoLSZUHwoms37c",
    authDomain: "gamesetmatch-8b949.firebaseapp.com",
    databaseURL: "https://gamesetmatch-8b949.firebaseio.com",
    projectId: "gamesetmatch-8b949",
    storageBucket: "gamesetmatch-8b949.appspot.com",
    messagingSenderId: "860716796545"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
          <CardSection>
            <HappyDay />
          </CardSection>
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()} >
            Log Out
          </Button>
        </CardSection>
        </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="small" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Game Set Match" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
