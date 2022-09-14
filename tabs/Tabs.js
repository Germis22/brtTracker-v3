import {View, Text} from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import Estaciones from '../screens/Estaciones';
import Buses from '../screens/Buses';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" shifting="true" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={Home}
        activeColor="#14213d"
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#14213d',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Estaciones"
        component={Estaciones}
        options={{
          tabBarLabel: 'Estaciones',
          tabBarColor: '#14213d',
          tabBarIcon: ({color}) => (
            <Icon name="location-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Buses"
        component={Buses}
        options={{
          tabBarLabel: 'Buses',
          tabBarColor: '#14213d',
          tabBarIcon: ({color}) => (
            <Icon name="bus-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
