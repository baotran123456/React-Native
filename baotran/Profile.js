import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>

        <Text>Profile</Text>

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
});