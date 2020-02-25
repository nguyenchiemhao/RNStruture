import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const HomeScreenTwo = ({navigation}) => {
  return (
    <View>
      <Text>HomeScreenTwo</Text>
      <TouchableHighlight onPress={() => navigation.navigate('DetailScreen')}>
        <Text>Goto detailscreen</Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreenTwo;
