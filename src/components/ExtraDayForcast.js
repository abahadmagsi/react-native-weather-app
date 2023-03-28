import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import ExtraDayForcastCard from './ExtraDayForcastCard';
import axios from 'axios';
import {Extra_Day_API, API_KEY} from '@env';
function ExtraDayForcast({coord}) {
  const [apiData, setApiData] = useState(null);
  const fetch5DayData = () => {
    const {data} = axios
      .get(`${Extra_Day_API}lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}`)
      .then(res => {
        setApiData(res.data);
      })
      .catch(err => {
        Alert.alert('Something Went wrong.', err);
      });
  };

  useEffect(() => {
    fetch5DayData();
  }, [coord]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5 Day / 3 Hour forcast </Text>
      {/* <FlatList/> */}
      {apiData
        ? apiData.list.map((item, ind) => {
            return (
              <ExtraDayForcastCard
                key={ind}
                date={item.dt_txt}
                temp={item.main.temp}
                minTemp={item.main.temp_min}
                maxTemp={item.main.temp_max}
                humidity={item.main.humidity}
                main={item.weather[0].main}
                des={item.weather[0].description}
                img={item.weather[0].icon}
              />
            );
          })
        : ''}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default ExtraDayForcast;
