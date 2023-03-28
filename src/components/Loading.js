import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
function Loading() {
  let {height} = Dimensions.get('window');

  return (
    <View style={[{height}, styles.container]}>
      <ActivityIndicator size={150} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'red',
    position: 'relative',
    bottom: 170,
  },
});

export default Loading;
