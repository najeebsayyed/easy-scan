import {} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';
import HomeIcon from '../assets/icons/home.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import ScanIcon from '../assets/icons/scan.svg';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#fff',
          elevation: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <HomeIcon
              width={size}
              height={size}
              fill={focused ? '#2563EB' : '#9CA3AF'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <ScanIcon
              width={size}
              height={size}
              fill={focused ? '#2563EB' : '#9CA3AF'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <ProfileIcon
              width={size}
              height={size}
              fill={focused ? '#2563EB' : '#9CA3AF'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
