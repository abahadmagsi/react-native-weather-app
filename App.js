import React, {useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import Header from './src/components/Header';
import UserInput from './src/components/UserInput';
import axios from 'axios';
import {API_KEY, GEO_API_URL, CURRENT_API_URL} from '@env';
import WeatherDataSection from './src/components/WeatherDataSection';
import Geolocation from '@react-native-community/geolocation';
import {PermissionsAndroid} from 'react-native';
import Loading from './src/components/Loading';
import ExtraDayForcast from './src/components/ExtraDayForcast';

const App = () => {
  const [city, setCity] = useState('');
  const [apiData, setApiData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [locationData, setLocationData] = useState(null);
  const [err, setErr] = useState(false);
  //fetching api on user input
  const fetchGeoCoeds = async () => {
    setIsLoading(true);
    let {data} = axios
      .get(`${GEO_API_URL}q=${city}&limit=5&appid=${API_KEY}`)
      .then(res => {
        let filteredData = res.data.filter(item => item.country == 'PK');
        axios
          .get(
            `${CURRENT_API_URL}lat=${filteredData[0].lat}&lon=${filteredData[0].lon}&appid=${API_KEY}`,
          )
          .then(res => {
            setApiData(res.data);
            setIsLoading(false);
          })
          .catch(err => {
            Alert.alert(
              'Something went wrong.',
              'please check your connection or type correct city name',
            );
            setIsLoading(false);
          });
      })
      .catch(err => {
        Alert.alert(
          'Something went wrong.',
          'please check your connection or type correct city name',
        );

        setIsLoading(false);
      });

    setCity('');
  };

  //fetching api on user location
  useEffect(() => {
    async function requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message:
              'Weather App needs access to your location ' +
              'to provide accurate weather information.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted == true || granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              setLocationData(position);
              axios
                .get(
                  `${CURRENT_API_URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`,
                )
                .then(res => {
                  setApiData(res.data);
                  setIsLoading(false);
                })
                .catch(err => {
                  Alert.alert('Something went wrong.', err);
                });
            },
            error => Alert.alert('Something went wrong ', error),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
          );
        } else {
          Alert.alert('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.app}>
      {!locationData ? (
        <Loading />
      ) : (
        <>
          <Header />
          <UserInput setCity={setCity} city={city} fetchFunc={fetchGeoCoeds} />
        </>
      )}
      <ScrollView>
        {isLoading ? (
          <Loading />
        ) : apiData.name ? (
          <WeatherDataSection apiData={apiData} />
        ) : (
          <Loading />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#4b8da6',
  },
});

export default App;
