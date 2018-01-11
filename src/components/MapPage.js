import React from 'react';
import { Text, View } from 'react-native';

const MapPage = (props) => {
  return (
    <View style={styles.background}>
      <Text>Map Page!!</Text>
    </View>
  )
}

const styles = {
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  }
}


export default MapPage;
