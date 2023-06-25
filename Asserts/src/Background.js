import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('../src/leaves.jpg')}
        style={{height: '100%'}}></ImageBackground>
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Background;
