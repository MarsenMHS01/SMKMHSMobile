import {View, Text, Image} from 'react-native';
import React from 'react';
import Home from './src/assets/pages/Home';
import Detail from './src/assets/pages/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <View>
        <Home />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Detail />
      </View>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
