/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Header, Button, ListItem, Text} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

const list = [
  {
    id: 1,
    title: 'Appointments',
  },
  {
    id: 2,
    title: 'Trips',
  },
];

const visible = null;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trashVisible: false,
      token: 'dasdfsjafhskhasdfhksf#dadasdasd',
    };
  }

  ShowHideComponent = async () => {
    if (this.state.trashVisible == true) {
      this.setState({trashVisible: false});
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log(value);
    } else {
      this.setState({trashVisible: true});
    }
  };
  
  visitDetail = async (item) => {
    value = 'dogukantokend323424'
    try {
      await AsyncStorage.setItem('@storage_Key', value);
    } catch (e) {
      // saving error
    }
  };
  render() {
    return (
      <View>
        <Header
          backgroundColor={'#ffc966'}
          placement="center"
          centerComponent={{
            text: 'Note List',
            style: {color: '#fff', fontSize: 30, top: 0},
          }}
          leftComponent={
            <Button
              buttonStyle={{
                backgroundColor: '#ffc966',
              }}
              icon={{
                name: 'ios-trash',
                size: 28,
                color: '#517fa4',
                type: 'ionicon',
              }}
              onPress={this.ShowHideComponent}
            />
          }
          rightComponent={
            <Button
              buttonStyle={{
                backgroundColor: '#ffc966',
              }}
              icon={{
                name: 'ios-add',
                size: 28,
                color: '#517fa4',
                type: 'ionicon',
              }}
              onPress={() => addAction()}
            />
          }
        />
        <View>
          {list.map((item, i) => (
            <TouchableOpacity key={i} onPress={this.visitDetail(item)}>
              <ListItem
                title={item.title}
                leftIcon={
                  this.state.trashVisible ? (
                    <Button
                      buttonStyle={{
                        backgroundColor: 'white',
                      }}
                      icon={{
                        name: 'ios-trash',
                        size: 28,
                        color: '#cc0000',
                        type: 'ionicon',
                      }}
                    />
                  ) : null
                }
                bottomDivider
                chevron
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  addAction = () => {
    console.log('Hello');
  };
}

const styles = StyleSheet.create({});

export default App;
