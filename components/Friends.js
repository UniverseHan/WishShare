import React, { 
  Component
 } from 'react';
import { 
  Text, 
  FlatList,
  StyleSheet,
  View
} from 'react-native';

import { ListItem } from 'react-native-elements';

export default class Friends extends Component {
  constructor() {
    super();
  }

  render() {
  
    return <FlatList style={{
      alignSelf: "stretch",
      borderWidth: 1}}
    data={this.props.data}
    keyExtractor = {(item, index) => index.toString()}
    renderItem={({item}) => 
    <ListItem rountAvatar
      title={item.givenName}
      subtitle="Birthday 03.18"/>}
  />
  }
}

const styles = StyleSheet.create({
  friend: {
    height: 50,
  },
  friendName: {
    color: "red"
  }
});