import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Router from './Router'
// import { Header, Button, Spinner, CardSection, Card } from './components/common';
// import { View } from 'react-native';
// import LoginForm from './components/LoginForm';
// import HappyDay from './components/HappyDay';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
      const config = {
        apiKey: "AIzaSyAzr7VRMSJYjInvAZCjrVoLSZUHwoms37c",
          authDomain: "gamesetmatch-8b949.firebaseapp.com",
          databaseURL: "https://gamesetmatch-8b949.firebaseio.com",
          projectId: "gamesetmatch-8b949",
          storageBucket: "gamesetmatch-8b949.appspot.com",
          messagingSenderId: "860716796545"
      };
    firebase.initializeApp(config);
    }

  render() {
    console.disableYellowBox = true
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

// state = { loggedIn: null };
// componentWillMount() {
//   firebase.initializeApp({
//     apiKey: "AIzaSyAzr7VRMSJYjInvAZCjrVoLSZUHwoms37c",
//   authDomain: "gamesetmatch-8b949.firebaseapp.com",
//   databaseURL: "https://gamesetmatch-8b949.firebaseio.com",
//   projectId: "gamesetmatch-8b949",
//   storageBucket: "gamesetmatch-8b949.appspot.com",
//   messagingSenderId: "860716796545"
//   });

//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       this.setState({ loggedIn: true });
//     } else {
//       this.setState({ loggedIn: false });
//     }
//   });

//   renderContent() {
//     switch (this.state.loggedIn) {
//       case true:
//         return (
//           <Card>
//
//           <CardSection>
//             <HappyDay />
//           </CardSection>
//
//           <CardSection>
//           <Button onPress={() => firebase.auth().signOut()} >
//             Log Out
//           </Button>
//         </CardSection>
//         </Card>
//         );
//       case false:
//         return <LoginForm />;
//       default:
//         return <Spinner size="small" />;
//     }
//   }
//
//   render() {
//     return (
//       <View>
//         <Header headerText="Game Set Match" />
//         {this.renderContent()}
//       </View>
//     );
//   }
// }

export default App;
