# React Native Weather App

Welcome to the React Native Weather App repository! This application allows you to check the weather in your current location or any other location you would like to check. You can also get additional information for 5 days and every 3 hours.

## How to Use

To clone this repository, run the following command in your terminal:

git clone https://github.com/abahadmagsi/react-native-weather-app.git


To install the required dependencies, navigate to the project root file in your terminal and run the following command:

npm i


After installing the dependencies, create a `.env` file in the project root directory and set the following environment variables:

- `GEO_API_URL` - Current Weather API to get geo-locations
- `CURRENT_API_URL` - Current Weather API to get current weather
- `Extra_Day_API` - 5 Day Forecast API
- `API_KEY` - API key from OpenWeatherAPI website

You can get these API keys from the OpenWeatherAPI website.

Once the environment variables are set, you can start the app by running:

npm start


## Additional Features

- The app automatically fetches the weather details of your current location on start.
- You can get additional information for 5 days and every 3 hours.

## Challenges Faced

During development, we faced challenges related to making API calls faster and rendering accurate data. However, after implementing best practices and optimizing our code, we were able to overcome these challenges. 

## Conclusion

We hope you find the React Native Weather App useful and informative. Please feel free to contribute to the project or raise any issues you may encounter while using the application. Thank you for using our application!

