import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 20, marginVertical: 100, flex: 1}}>
        <Text style={{fontSize: 64, color: 'white'}}>Let's start</Text>
        <Text style={{fontSize: 64, color: 'white', marginBottom: 40}}>
          Coding
        </Text>
        <Btn
          bgColor={darkGreen}
          textColor="white"
          btnLabel="Login"
          press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkGreen}
          btnLabel="Signup"
          press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

const style = StyleSheet.create({});

export default Home;
