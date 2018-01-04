import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAzr7VRMSJYjInvAZCjrVoLSZUHwoms37c",
    authDomain: "gamesetmatch-8b949.firebaseapp.com",
    databaseURL: "https://gamesetmatch-8b949.firebaseio.com",
    projectId: "gamesetmatch-8b949",
    storageBucket: "gamesetmatch-8b949.appspot.com",
    messagingSenderId: "860716796545"
  }
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
