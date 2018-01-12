import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapPage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 39.743890,
              longitude: -105.020109,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: 39.743890,
                longitude: -105.020109,
              }}
              title={'Broncos Tailgate Party'}
              description={'Come Join before the game!'}
            />
            <MapView.Marker
              coordinate={{
                latitude: 39.755882,
                longitude: -104.994178,
              }}
              title={'Mizzou Watch Party'}
              description={'Tigers Game'}
            />
            <MapView.Marker
              coordinate={{
                latitude: 39.748660,
                longitude: -105.007710,
              }}
              title={'Buffs Watch Party'}
              description={'CU BUFFS Game'}
            />

          </MapView>
        </View>
      )
    }
  }

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
}


// const { width, height } = Dimensions.get('window')
//
// const SCREEN_HEIGHT = height
// const SCREEN_WIDTH = width
// const ASPECT_RATIO = width / height
// const LATTITUDE_DELTA = 0.0922
// const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO
//
// export default class MapPage extends Component {
//   constructor(props) {
//     super(props)
//
//     this.state ={
//       initialPosition: {
//         latitude: 0,
//         longitude: 0,
//         latitudeDelta: 0,
//         longitudeDelta: 0,
//       },
//       markerPosition: {
//         latitude: 0,
//         longitude: 0
//       }
//     }
//   }
//
//   watchID: ?number = null
//
//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition((position) => {
//       var lat = parseFloat(position.coords.latitude)
//       var long = parseFloat(position.coords.longitude)
//
//       var initialRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATTITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA,
//       }
//       this.setState({initialPosition: initialRegion})
//       this.setState({markerPosition: initialRegion})
//     },
//     (error) => alert(JSON.stringify(error)),
//     {enablHighAccuracy: true, timeout: 20000, maximumAge: 1000})
//
//     this.watchID = navigator.geolocation.watchPosition((position) => {
//       var lat = parseFloat(position.coords.latitude)
//       var long = parseFloat(position.coords.longitude)
//
//       var lastRegion = {
//         latitude: lat,
//         longitude: long,
//         latitudeDelta: LATTITUDE_DELTA,
//         longitudeDelta: LONGITUDE_DELTA
//       }
//
//         this.setState({initialPosition: lastRegion})
//         this.setState({markerPosition: lastRegion})
//     })
//   }
//
//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID)
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           region={this.state.initialPosition}>
//
//             <MapView.Marker
//               coordinate={this.state.markerPosition}>
//               <View style={styles.radius}>
//                 <View style={styles.marker}>
//                 </View>
//               </View>
//             </MapView.Marker>
//           </MapView>
//       </View>
//     )
//   }
// }
//
// const styles = {
//   container: {
//
//   }
// }
