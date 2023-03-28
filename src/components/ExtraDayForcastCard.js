import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
function ExtraDayForcastCard({
  date,
  des,
  humidity,
  main,
  maxTemp,
  minTemp,
  temp,
  img,
}) {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `http://openweathermap.org/img/w/${img}.png`}}
        style={styles.img}
      />
      <View style={styles.textSec}>
        <Text style={styles.dateTitle}>{date}</Text>
        <View style={styles.subTitleView}>
          <Text style={styles.subTitle}>{main}</Text>
          <Text style={styles.subTitle}>, {des}</Text>
        </View>
        <Text style={styles.text}>Minimum Temp : {minTemp}</Text>
        <Text style={styles.text}>Maximum Temp : {maxTemp}</Text>
        <Text style={styles.text}>Humidity : {humidity}</Text>
      </View>
      <Text style={styles.temp}>{temp} *C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '98%',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  subTitleView: {
    flexDirection: 'row',
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  subTitle: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },

  temp: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    marginRight: 20,
  },
  img: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
});

export default ExtraDayForcastCard;
