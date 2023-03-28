import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
function WeatherDetailsCard({props}) {
  return (
    <View style={styles.WeatherDetailsCard}>
      <Text style={styles.text1}>{props.title}</Text>
      <Text style={styles.text2}>{props.text2}</Text>
      <Text style={styles.text3}>{props.text3} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherDetailsCard: {
    backgroundColor: 'white',
    width: 180,
    height: 150,
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  text1: {
    padding: 5,
    color: 'gray',
    fontSize: 17,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  text2: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '900',
    color: 'black',
  },
  text3: {
    padding: 5,
    color: 'gray',
    fontSize: 17,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
export default WeatherDetailsCard;
