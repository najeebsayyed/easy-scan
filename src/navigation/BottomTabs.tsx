import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import ScannerScreen from '../screens/Scanner/ScannerScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

import HomeOutlineIcon from '../assets/icons/home_outline.svg';
import HomeFilledIcon from '../assets/icons/home_fill.svg';

import ProfileOutlineIcon from '../assets/icons/profile_outline.svg';
import ProfileFilledIcon from '../assets/icons/profile_fill.svg';

import ScanIcon from '../assets/icons/scan.svg';

const Tab = createBottomTabNavigator();

const ScannerButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={onPress}
    className="items-center justify-center -top-6"
  >
    <View
      className="w-[70px] h-[70px] rounded-full flex-row bg-primary justify-center items-center mt-2 "
      style={{
        elevation: 8,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
        tabBarStyle: {
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 20,
          height: 70,
          borderRadius: 25,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <HomeFilledIcon width={28} height={28} color={color} />
            ) : (
              <HomeOutlineIcon width={28} height={28} color={color} />
            ),
        }}
      />

      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarLabel: '',
          tabBarButton: props => <ScannerButton {...props} />,
          tabBarIcon: () => <ScanIcon width={42} height={42} color="#FFFFFF" />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <ProfileFilledIcon width={28} height={28} color={color} />
            ) : (
              <ProfileOutlineIcon width={28} height={28} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
