import React from 'react';
import { Text, View } from 'react-native';

const UserProfile = (props) => {
  return (
    <View style={styles.background}>
      <Text>User Profile Page!!</Text>
    </View>
  )
}

const styles = {
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  }
}


export default UserProfile;
