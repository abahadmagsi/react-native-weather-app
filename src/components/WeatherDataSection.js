import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import WeatherDetailsCard from './WeatherDetailsCard';
import ExtraDayForcast from './ExtraDayForcast';

function WeatherDataSection(props) {
  const tempC = (props.apiData.main.temp - 273.15).toFixed();
  const feelsLiketempC = (props.apiData.main.feels_like - 273.15).toFixed();

  const date = new Date(props.apiData.dt * 1000);
  const dateString = date.toLocaleString();

  let iconCode = props.apiData.weather[0].icon;

  return (
    <View style={styles.weatherSection}>
      <Text style={styles.city}>{props.apiData.name}</Text>
      <Text style={styles.state}>{dateString}</Text>
      <Text style={styles.temp}>{tempC} *C</Text>
      <Text style={styles.feelsLike}>{`Feels like ${feelsLiketempC} *C`}</Text>

      <View style={styles.weatherInfo}>
        <Text style={styles.weatherInfoText}>
          {props.apiData.weather[0].main}
        </Text>
        <Image
          source={{uri: `http://openweathermap.org/img/w/${iconCode}.png`}}
          style={styles.img}
        />
        <Text style={styles.weatherInfoText}>
          {props.apiData.weather[0].description}
        </Text>
      </View>
      <Text style={styles.cardSectionTitle}>Details</Text>
      <View style={styles.cardSection}>
        <WeatherDetailsCard
          props={{
            title: 'Weather condition',
            text2: props.apiData.weather[0].main,
            text3: props.apiData.weather[0].description,
          }}
        />
        <WeatherDetailsCard
          props={{
            title: 'humidity',
            text2: props.apiData.main.humidity,
            text3: '',
          }}
        />
        <ExtraDayForcast coord={props.apiData.coord} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  city: {
    fontSize: 21,
    fontWeight: '900',
    color: 'white',
    textTransform: 'uppercase',
  },
  state: {
    color: 'white',
    fontSize: 18,
  },
  temp: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },

  weatherInfo: {
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherInfoText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardSectionTitle: {
    textAlign: 'left',
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  cardSection: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },

  feelsLike: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    position: 'relative',
    top: -20,
  },
});
export default WeatherDataSection;
