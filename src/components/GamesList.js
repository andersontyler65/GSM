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
           <Text>Denver Broncos</Text>
         </Separator>
         <ListItem >
           <Text>Broncos vs LAC</Text>
         </ListItem>
         <Separator bordered>
           <Text>MLB</Text>
         </Separator>
         <ListItem>
           <Text>Colorado Rockies</Text>
         </ListItem>
         <Separator bordered>
           <Text>MLS</Text>
         </Separator>
         <ListItem last>
           <Text>Colorado Rapids</Text>
         </ListItem>
         <Separator bordered>
           <Text>NBA</Text>
         </Separator>
         <ListItem>
           <Text>Denver Nuggets</Text>
         </ListItem>
         <Separator bordered>
           <Text>NHL</Text>
         </Separator>
         <ListItem>
           <Text>Colorado Avalanche</Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Football</Text>
         </Separator>
         <ListItem>
           <Text>Colorado</Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Mens Basketball</Text>
         </Separator>
         <ListItem>
           <Text>CU Denver</Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Soccer</Text>
         </Separator>
         <ListItem>
           <Text>JWU</Text>
         </ListItem>
         <Separator bordered>
           <Text>NCAA Womens Basketball</Text>
         </Separator>
         <ListItem>
           <Text>ASU</Text>
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
