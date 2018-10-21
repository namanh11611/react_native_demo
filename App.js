import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://htc-wallpaper.com/wp-content/uploads/2013/10/Wolverine.jpg'
    };
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', margin: 10}}>
        <Image source={pic} style={{width: 45, height: 90}}/>
        <Image source={pic} style={{width: 45, height: 90}}/>
        <Image source={pic} style={{width: 45, height: 90}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
