/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Favorites from './screens/Favorites';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Add') {
              iconName = focused
                ? 'ios-add-circle'
                : 'ios-add-circle-outline'
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'ios-heart' : 'ios-heart-empty';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            height: 62,
            paddingBottom: 6
          },
          activeTintColor: '#663399',
          inactiveTintColor: '#9c7fba',
        }}>
        <Tab.Screen name="Add" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
