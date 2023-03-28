import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> Weather App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#4287f5',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default Header;
