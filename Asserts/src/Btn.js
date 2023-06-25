import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, textColor, press}) {
  return (
    <TouchableOpacity
      onPress={press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 350,
        paddingVertical: 9,
        marginVertical: 10,
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
