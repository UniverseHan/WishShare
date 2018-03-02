/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Friends from './components/Friends';
import Contacts from 'react-native-contacts';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.loadContacts = this.loadContacts.bind(this);
    this.state = {
      contacts: []
    }
  }
  
  loadContacts() {
    Contacts.getAll((err, contacts) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(contacts);
      this.setState({contacts: contacts});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Birday list
        </Text>
        <Button title="Load" onPress={this.loadContacts}/>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Friends data={this.state.contacts}></Friends>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5
  },
});
