import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

class GamesList extends Component {

render() {
  return (
    <View style={styles.background}>
      <Text>Games!!</Text>
    </View>
    )
  }
}


const styles = {
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  }
}

export default GamesList;


// state = { week: [] }
//
// componentWillMount() {
//   axios.get('https://api.sportradar.us/nfl-ot2/games/2017/REG/1/schedule.json?api_key=znnx8dv5jerxsj58x53aequ8')
//     .then(response => this.setState({ week: response.data }))
// }
// renderWeeks() {
//   console.log(this.state.week)
//     return this.state.week.game.map(week => <Text key={game.week}>{week.id}</Text>
//     )
//   }
