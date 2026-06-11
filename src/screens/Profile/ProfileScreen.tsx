import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../context/AuthContext';

const ProfileScreen = () => {
  const { isGuest, setIsGuest } = useAuth();

  const user = auth().currentUser;
  const handleLogin = async () => {
    await AsyncStorage.removeItem('isGuest');
    setIsGuest(false);
  };
  const handleLogout = async () => {
    try {
      // Logout Firebase user if logged in
      if (auth().currentUser) {
        await auth().signOut();
      }

      // Remove guest mode
      await AsyncStorage.removeItem('isGuest');
      setIsGuest(false);
    } catch (error) {
      console.log('Logout error:', error);
    }
  };
  return (
    <View className="flex-1 justify-center items-center">
      {user ? (
        <TouchableOpacity
          className="bg-primary px-6 py-3 rounded-xl mt-4"
          onPress={handleLogout}
        >
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      ) : isGuest ? (
        <TouchableOpacity
          className="bg-primary px-6 py-3 rounded-xl mt-4"
          onPress={handleLogin}
        >
          <Text className="text-white font-semibold">Login / Sign Up</Text>
        </TouchableOpacity>
      ) : (
        <Text className="text-xl font-bold">Not Authenticated</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
