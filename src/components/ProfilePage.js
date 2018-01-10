import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.headerBackground}>
        {/* <Image style={styles.headerBackground} source={require('../img/gsmLogo.png')} /> */}

        <View style={styles.header}>

        {/* <View style={styles.profilepicWrap}> */}
            <Image style={styles.profilePic, styles.profilepicWrap} source={require('../img/Tyler_Anderson.jpg')} />
        {/* </View> */}

          <Text style={styles.name}> Tyler Anderson </Text>
          <Text style={styles.pos}> - GO BRONCOS! - </Text>

        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 50,
    borderColor: 'rgba(0,0,0, 0.4)',
    borderWidth: 1,
  },
  profilePic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '300',
    fontStyle: 'italic',
  }
})
