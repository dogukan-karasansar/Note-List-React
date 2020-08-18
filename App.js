/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Header, Button, Text, Icon} from 'native-base';

const App = () => {
  return (
    <Container style={styles.container}>
      <Header style={{backgroundColor: '#1a1a1a'}}>
        <Text style={styles.title}>Note List React </Text>
      </Header>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },

  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Do Hyeon',
  },
});

export default App;
