import React from "react";
import {StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
    
    <Text>Home View</Text>
    <View style={styles.button}>
    <Button  onPress = {()=> navigation.navigate('Profile')} title='Profile '></Button>
    </View>
    <View style={styles.button}>
    <Button  onPress = {()=> navigation.navigate('Album')} title ='Album'></Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
      marginTop: 20
      
  }
});