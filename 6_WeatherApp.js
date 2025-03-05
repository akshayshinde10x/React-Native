import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { getWeather, getForecast } from './6.1_Weather_API';

const WeatherApp = () => {
	const [city, setCity] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState(null);

	const handleGetWeather = () => {
		getWeather(city, setWeatherData, setForecastData);
	};

	const handleGetForecast = () => {
		getForecast(city, setWeatherData, setForecastData);
	};

	return (
		<View style={styles.centeredContent}>
			<Text style={styles.title}>Tech Amplifiers</Text>
			<Text style={styles.title}>Weather App</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter city name"
				value={city}
				onChangeText={setCity}
			/>

			<Pressable
				onPress={handleGetWeather}
				style={({ pressed }) => [
					styles.button,
					{
						backgroundColor: pressed ? '#1e8449' : '#2ecc71',
					},
				]}
			>
				<Text style={styles.buttonText}>Get Weather</Text>
			</Pressable>
			<Text> </Text>
			<Pressable
				onPress={handleGetForecast}
				style={({ pressed }) => [
					styles.button,
					{
						backgroundColor: pressed ? '#1e8449' : '#2ecc71',
					},
				]}
			>
				<Text style={styles.buttonText}>Get Forecast</Text>
			</Pressable>

			{weatherData && (
				<View style={styles.weatherInfo}>
					<Text style={styles.weatherText}>
						<Text style={styles.heading}>
							Temperature:
						</Text> {weatherData.temperature} °C
					</Text>
					<Text style={styles.weatherText}>
						<Text style={styles.heading}>
							Description:
						</Text> {weatherData.description}
					</Text>
				</View>
			)}

			{forecastData && (
				<View style={styles.weatherInfo}>
					<Text style={styles.heading}>
						Forecast for the next few hours: {'\n'}
					</Text>
					{forecastData.map((forecastItem, index) => (
						<Text key={index} style={styles.weatherText}>
							<Text style={styles.subheading}>Time:</Text>{' '}
							{new Date(forecastItem.dt * 1000).toLocaleTimeString()},{' '}
							<Text style={styles.subheading}>Temperature:</Text>{' '}
							{(forecastItem.main.temp - 273.15).toFixed(2)} °C,{' '}
							<Text style={styles.subheading}>Description:</Text>{' '}
							{forecastItem.weather[0].description}
						</Text>
					))}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
	},
	centeredContent: {
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#5c04f5',
		marginBottom: 20,
	},
	input: {
		height: 40,
		width: '80%',
		borderColor: '#5c04f5',
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 20,
		color: '#5c04f5',
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#5c04f5',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: 'white',
		marginLeft: 10,
	},
	weatherInfo: {
		marginTop: 20,
		alignItems: 'center',
	},
	heading: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#5c04f5',
		marginTop: 10,
	},
	subheading: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#5c04f5',
		marginTop: 10,
	},
	weatherText: {
		color: '#5c04f5',
		fontSize: 16,
		marginBottom: 8,
	},
});
export default WeatherApp;
