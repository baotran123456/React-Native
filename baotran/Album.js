import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Album() {
  return (
    <View style={styles.container}>

        <Text>Album</Text>

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