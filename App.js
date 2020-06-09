import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';

export default function App() {
  let content = (
    <Home />
  )

  return (
    <View style={styles.screen}>
      <Header title="News App" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
