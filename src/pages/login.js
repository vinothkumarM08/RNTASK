import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  Button,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const YourApp = ({navigation}) => {
  const [name, setName] = useState('');
  const [Password, setPassword] = useState('');

  const SignIn = () => {
    var reg =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name === '') {
      alert('enter the name');
    } else if (!Password) {
      alert('password is required.');
    } else {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.themoviedb.org/3/authentication/token/new',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc4MzQxZGExODkxYmJlN2E2ZTk5MmM4YmQzZGNkMiIsInN1YiI6IjY0YjZhMmM4Yjk3NDQyMDEzYWZlNjY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFVG_O9Tj5FZBqseJ986lvO-850t1U_p7Ql8bQAYylw',
          accept: 'application/json',
        },
      };

      axios
        .request(config)
        .then(response => {
          let data = JSON.stringify({
            username: name,
            password: Password,
            request_token: response.data.request_token,
          });

          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.themoviedb.org/3/authentication/token/validate_with_login',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc4MzQxZGExODkxYmJlN2E2ZTk5MmM4YmQzZGNkMiIsInN1YiI6IjY0YjZhMmM4Yjk3NDQyMDEzYWZlNjY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFVG_O9Tj5FZBqseJ986lvO-850t1U_p7Ql8bQAYylw',
              accept: 'application/json',
              'content-type': 'application/json',
            },
            data: data,
          };

          axios
            .request(config)
            .then(response => {
              if (response.data.request_token) {
                alert('success');
                navigation.navigate('Home');
              } else {
                alert(
                  'Login failed...Please enter valid username and password',
                );
              }
            })
            .catch(error => {
              console.log(error);
              alert('Login failed...Please enter valid username and password');
            });
        })
        .catch(error => {
          console.log(error);
          alert('create token failed');
        });
    }
  };

  return (
    <View style={{height: windowHeight, backgroundColor: 'black'}}>
      <View
        style={{
          height: 60,
          backgroundColor: '#263E60',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../src/assets/image.png')}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          margin: 30,
          justifyContent: 'center',
          marginTop: windowHeight / 4,
          borderRadius: 20,
        }}>
        <Text
          style={{
            padding: 10,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Sign In{' '}
        </Text>
        <Text
          style={{
            padding: 10,
            color: 'black',
          }}>
          Sign in To your self services portal
        </Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={e => setName(e)}
          // value={text}
          placeholder="Username"></TextInput>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={setPassword}
          placeholder="Password"></TextInput>

        <TouchableOpacity
          onPress={() => SignIn()}
          style={{
            height: 40,
            backgroundColor: '#ff7d65',
            // backgroundColor: 'blue',
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YourApp;
