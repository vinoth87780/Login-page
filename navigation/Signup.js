import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import React from 'react';
import Background from '../Asserts/src/Background';
import {darkGreen} from '..//Asserts/src/Constants';
import Field from '../Asserts/src/Field';
import Btn from '../Asserts/src/Btn';
import Icons from 'react-native-vector-icons/AntDesign';

const Signup = props => {
  return (
    <Background>
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{height: 40, width: 40}}>
          <Icons
            style={{
              color: 'white',
              paddingLeft: 5,
              paddingTop: 8,
              fontSize: 25,
              fontWeight: 'bold',
              backgroundColor: 'darkgreen',
              height: 40,
              width: 40,
              marginVertical: 10,
              borderRadius: 100,
              marginLeft: 10,
            }}
            name="left"></Icons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          width: 400,
          flex: 1,
          marginBottom: 0,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            paddingBottom: 10,
          }}>
          Create a new Account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Mobile Number" keyboardType={'numeric'} />
          <Field
            keyboardType={'email-address'}
            placeholder="Email / Username"
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '70%',
                paddingRight: 16,
              }}>
              <Text>by Signing in, you agree to our</Text>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Terms & condition
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'center',
              paddingRight: 16,
            }}>
            <Text>
              and {''}
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingLeft: 10,
                }}>
                Private Policy
              </Text>
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              Alert('your are signined');
              props.navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </Background>
  );
};

export default Signup;
