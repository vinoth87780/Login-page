import {TextInput} from 'react-native';
import React from 'react';
import {darkGreen, green} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: {darkGreen},
        paddingBottom: 10,
        width: '76%',
        backgroundColor: 'rgb(220, 220, 220)',
        marginVertical: 10,
        fontSize: 20,
        paddingLeft: 15,
        alignItems: 'center',
      }}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
