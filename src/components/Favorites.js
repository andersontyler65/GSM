import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Container, Header, Button, Content, Item, Input} from 'native-base';

class Favorites extends Component {
  render() {
    return (
      // <Container style={styles.containerStyle}>
        <Content>
        <View style={styles.containerStyle}>
          <Button>
            <Image style={styles.profilepicWrap} source={require('../img/broncos_logo.jpg')} />
          </Button>

          <Item>
            <Image style={styles.profilepicWrap} source={require('../img/avs_logo.jpg')} />
          </Item>

          <Item>
            <Image style={styles.profilepicWrap} source={require('../img/buffs_logo.jpg')} />
          </Item>
        </View>

        <View style={styles.containerStyle}>
          <Item>
            <Image style={styles.profilepicWrap} source={require('../img/nuggets_logo.jpg')} />
          </Item>

          <Item>
            <Image style={styles.profilepicWrap} source={require('../img/rockies_logo.jpg')} />
          </Item>

          <Item>
            <Image style={styles.profilepicWrap} source={require('../img/NY_GIANTS_LOGO.jpg')} />
          </Item>

        </View>
         </Content>
      // </Container>
    );
  }
}
export default Favorites


const styles = {
  containerStyle: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  },
profilepicWrap: {
  width: 100,
  height: 100,
  alignSelf: 'stretch',
  // borderRadius: 50,
  // borderColor: 'rgba(0,0,0, 0.4)',
  // borderWidth: 1,
},
profilePic: {
  flex: 1,
  width: null,
  alignSelf: 'stretch',
  borderRadius: 50,
  borderColor: '#fff',
  borderWidth: 1,
}
}
