// import React from 'react';
// import {Text, View} from 'react-native';
// import Login from './src/pages/login';
// import Mainpage from './src/pages/Mainpage';
// import Movie from './src/pages/Movie';
// const YourApp = () => {
//   return (
//     <>
//       {/* <Login/> */}
//       {/* <Mainpage/> */}
//       {/* <Movie/> */}
//     </>
//   );
// };

// export default YourApp;
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mainpage from './src/pages/Mainpage';
import Movie from './src/pages/Movie';
import Login from './src/pages/login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Home" component={Mainpage} />
        <Stack.Screen name="Details" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
