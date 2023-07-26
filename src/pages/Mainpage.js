import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const YourApp = ({navigation}) => {
  const [results, setResults] = useState([]);
  const getData = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.themoviedb.org/3/discover/movie',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc4MzQxZGExODkxYmJlN2E2ZTk5MmM4YmQzZGNkMiIsInN1YiI6IjY0YjZhMmM4Yjk3NDQyMDEzYWZlNjY1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jFVG_O9Tj5FZBqseJ986lvO-850t1U_p7Ql8bQAYylw',
        accept: 'application/json',
      },
    };

    axios
      .request(config)
      .then(response => {
        setResults(response?.data?.results);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
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
              marginLeft: 80,
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
        style={
          {
            // height: 150,
            // backgroundColor: 'black',
          }
        }>
        <ImageBackground
          source={require('../../src/assets/1.jpg.png')}
          style={{
            width: 400,
            height: 200,
            resizeMode: 'contain',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            Welcome To Our Movie Site
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            OUR SPECIAL
            <Text style={{color: 'red'}}> MOVIES</Text>
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'coloum',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Welcome To Our Movie Site
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Welcome To Our Movie Site
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              height: 40,
              // backgroundColor: '#ffffff',
              backgroundColor: '#ff1744',
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              width: 100,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <FlatList
        data={results}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              title="Go to Details"
              onPress={() => navigation.navigate('Details', {
                item
              })}
              style={{
                width: windowWidth / 3,
                alignItems: 'center',
                margin: 2,
              }}>
              <View>
                <Image
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/original' + item.poster_path,
                  }}
                  style={{width: windowWidth / 3.1, height: 100}}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#263E60',
                  height: 40,
                  width: windowWidth / 3.1,
                  display: 'flex',
                  flexDirection: 'coloum',
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: 8,
                      color: 'white',
                      padding: 5,
                    }}>
                    {/* Strager Things */}
                    {item.title}
                  </Text>
                  <Image
                    source={require('../../src/assets/Group19261.png')}
                    style={{
                      width: 50,
                      height: 10,
                      marginLeft: 4,
                      resizeMode: 'contain',
                      // backgroundColor:'green',
                    }}
                  />
                </View>
                <View>
                  <Image
                    source={require('../../src/assets/Vector.png')}
                    style={{
                      width: 50,
                      height: 20,
                      marginLeft: 4,
                      resizeMode: 'contain',
                      marginLeft: 60,
                      marginTop: -20,
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal={false}
        numColumns={3}
      />
      <View
        style={{
          backgroundColor: 'brown',
          height: 800,
          padding: 35,
        }}></View>
    </View>
  );
};

export default YourApp;
