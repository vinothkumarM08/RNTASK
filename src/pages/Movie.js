import React from 'react';
import {Text, View, Image, TextInput, Icon, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const YourApp = props => {
  console.log('fghjkl', props.route.params.item);

  return (
    <>
      <View
        style={{
          height: 70,
          backgroundColor: '#263E60',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('../../src/assets/image.png')}
            style={{width: 30, height: 30, resizeMode: 'contain'}}
          />
          <TextInput
            style={{
              borderColor: 'white',
              height: 40,
              width: 150,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginLeft: 90,
            }}
            placeholder="Search"
            placeholderTextColor={'white'}></TextInput>

          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            Log Out
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          height: 930,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 100,
          }}>
          <View
            style={{
              // backgroundColor:'yellow',
              height: 100,
              width: 150,
              rowGap: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              {props.route.params.item.title}
            </Text>
            <Text
              style={{
                color: 'white',
              }}>
              Rating : {props.route.params.item.vote_average}
            </Text>
            <Text
              style={{
                color: 'white',
              }}>
              {props.route.params.item.overview}
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Release Date : {props.route.params.item.release_date}
            </Text>

            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Original Language {props.route.params.item.original_language}
            </Text>
          </View>

          <Image
            source={{
              uri:
                'https://image.tmdb.org/t/p/original' +
                props.route.params.item.backdrop_path,
            }}
            style={{width: 200, height: 250}}
          />
        </View>
      </View>
    </>
  );
};

export default YourApp;
