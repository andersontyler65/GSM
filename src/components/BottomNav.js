import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import TeamsList from './TeamsList';



export default class BottomNav extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => Actions.selectGames()}>
            <Text>Games</Text>
          </Button>
          <Button onPress={() => Actions.addFavorite()}>
            <Text>Teams</Text>
          </Button>
          <Button onPress={() => Actions.location()}>
            <Text>Location</Text>
          </Button>
          {/* <Button onPress={() => Actions.userProfile()}>
            <Text>Profile</Text>
          </Button> */}
        </FooterTab>
      </Footer>
    );
  }
}
const styles = {
  containerStyle: {
    height: 10,
    flex: 1,
  }
}
