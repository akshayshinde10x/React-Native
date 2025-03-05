import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

export default function ButtonBasics({navigation}){
  const onPress = () => {
    Alert.alert('You tapped the button!');
  };

  const openApp = (appName) => {
    console.log('Opening App: ' + appName);
    navigation.navigate(appName, {name: 'Jane'})
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={() => openApp("Counter")} title="Open Counter App"/>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => openApp("TodoList")}  title="Open TodoList" color="#841584" />
      </View>
      <View style={styles.alternativeLayoutButtonContainer}>
        <Button onPress={() => openApp("Weather")}  title="Check Weather" color="#841584" />
        <Button onPress={onPress} title="OK!" color="#841584" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});