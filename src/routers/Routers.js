/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreenOne from '../screens/details/DetailScreenOne';
import DetailScreenTwo from '../screens/details/DetailScreenTwo';
import DetailsScreenThird from '../screens/details/DetailScreenThird';
import HomeScreenOne from '../screens/home/HomeScreenOne';
import HomeScreenTwo from '../screens/home/HomeScreenTwo';
import HomeScreenThird from '../screens/home/HomeScreenThird';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const DetailScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DetailScreenOne" component={DetailScreenOne} />
      <Tab.Screen name="DetailScreenTwo" component={DetailScreenTwo} />
      <Tab.Screen name="DetailScreenThird" component={DetailsScreenThird} />
    </Tab.Navigator>
  );
};
const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreenOne" component={HomeScreenOne} />
      <Tab.Screen name="HomeScreenTwo" component={HomeScreenTwo} />
      <Tab.Screen name="HomeScreenThird" component={HomeScreenThird} />
    </Tab.Navigator>
  );
};

const HomeScreenRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreenRouter;
