import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, SwipeRow, Icon, Button, View } from 'native-base';
import axios from 'axios';


class TeamsList extends Component {
  state = { teams: [] }

  componentWillMount() {
    axios.get('https://gamesetmatch-db.herokuapp.com/nfl_teams')
      .then(response => this.setState({ teams: response.data}))
  }

  renderTeams() {
      return this.state.teams.map(team =>
        <Text key={team.official_name}>{team.official_name}</Text>
      )
    }

  render() {
    console.log(this.state)
  return (
    <View >
      {this.renderTeams()}
    </View>
    )
  }
}


export default TeamsList;
// export default class TeamsList extends Component {
//   state = { nfl_teams: [] }
//
//   componentWillMount() {
//     axios.get('https://gamesetmatch-db.herokuapp.com/nfl_teams')
//       .then(response => this.setState({ official_name: response.data }))
//   }
//
//   renderOfficialName() {
//     return this.state.official_name.map(official_name =>
//     <Text key={team.name}>
//       {official_name.official_name}
//     </Text>
//     )
//   }
//
//   render() {
//     console.log(this.state)
//
//     return (
//       <View>
//         {this.renderOfficialName}
//       </View>
//     );
//   }
// }

// const styles = {
//   background: {
//     backgroundColor: 'rgba(0,0,0, 0.5)',
//   }
// }
// <Container>
//   <Content scrollEnabled={true}>
//     <Separator bordered>
//       <Text>NFL</Text>
//     </Separator>
//     <ListItem >
//       <Text>Denver Broncos</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>MLB</Text>
//     </Separator>
//     <ListItem>
//       <Text>Colorado Rockies</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>MLS</Text>
//     </Separator>
//     <ListItem last>
//       <Text>Colorado Rapids</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>NBA</Text>
//     </Separator>
//     <ListItem>
//       <Text>Denver Nuggets</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>NHL</Text>
//     </Separator>
//     <ListItem>
//       <Text>Colorado Avalanche</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>NCAA Football</Text>
//     </Separator>
//     <ListItem>
//       <Text>Colorado</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>NCAA Mens Basketball</Text>
//     </Separator>
//     <ListItem>
//       <Text>CU Denver</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>NCAA Soccer</Text>
//     </Separator>
//     <ListItem>
//       <Text>JWU</Text>
//     </ListItem>
//     <Separator bordered>
//       <Text>NCAA Womens Basketball</Text>
//     </Separator>
//     <ListItem>
//       <Text>ASU</Text>
//     </ListItem>
//   </Content>
// </Container>
