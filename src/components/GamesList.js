import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator, SwipeRow, Icon, Button } from 'native-base';
import axios from 'axios';

class GamesList extends Component {

render() {
  return (
    <Container>
       <Content scrollEnabled={true}>
         <Separator bordered>
           <Text>NFL</Text>
         </Separator>
         <ListItem >
           <Text>Broncos vs LA Chargers</Text>
         </ListItem>
         <Separator bordered>
           <Text>MLB</Text>
         </Separator>
         <ListItem>
           <Text>Colorado Rockies vs LA Dodgers</Text>
         </ListItem>
         <Separator bordered>
           <Text>MLS</Text>
         </Separator>
         <ListItem last>
           <Text>Colorado Rapids vs Seattle Sounders</Text>
         </ListItem>
         <Separator bordered>
           <Text>NBA</Text>
         </Separator>
         <ListItem>
           <Text>Denver Nuggets vs NY Knicks</Text>
         </ListItem>
         <Separator bordered>
           <Text>NHL</Text>
         </Separator>
         <ListItem>
           <Text>Colorado Avalanche vs Minnesota Wild </Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Football</Text>
         </Separator>
         <ListItem>
           <Text>Colorado vs Oregon</Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Mens Basketball</Text>
         </Separator>
         <ListItem>
           <Text>CU Denver vs CSU Rams</Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Soccer</Text>
         </Separator>
         <ListItem>
           <Text>Colorado vs Washington</Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Womens Basketball</Text>
         </Separator>
         <ListItem>
           <Text>ASU vs Arizona</Text>
         </ListItem>
       </Content>
     </Container>
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
