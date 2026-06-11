import { View, Text } from 'react-native';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScanIcon from '../../assets/icons/scan.svg';
import UserIconFilled from '../../assets/icons/profile_fill.svg';
import UserIconOutline from '../../assets/icons/profile_outline.svg';
import AuthOptionCard from '../../components/AuthOptionCard';
import Divider from '../../components/Divider';

const AuthChoice = ({ navigation }: any) => {
  const { setIsGuest } = useAuth();

  const continueAsGuest = async () => {
    try {
      await AsyncStorage.setItem('isGuest', 'true');
      setIsGuest(true);
    } catch (error) {
      console.log('Guest login error:', error);
    }
  };

  return (
    <View className="flex-1 bg-lightBg px-7 justify-center py-10">
      {/* Logo */}
      <View className="flex-row self-center">
        <Text className="text-5xl font-bold">Easy</Text>
        <Text className="text-5xl font-bold text-primary">Scan</Text>
      </View>

      <Text className="self-center mt-2 text-lg font-bold text-gray-500">
        Fast. Clear. Simple.
      </Text>

      {/* Illustration */}
      <View className="justify-center items-center bg-primary rounded-2xl self-center mt-2 mb-10 p-4">
        <ScanIcon height={160} width={160} color="white" />
      </View>

      {/* Login / Signup */}
      <AuthOptionCard
        title="Login / Sign Up"
        subtitle="Access your documents on multiple devices"
        icon={<UserIconFilled width={30} height={30} />}
        onPress={() => navigation.navigate('Login')}
      />

      <Divider label="or" />

      {/* Guest */}
      <AuthOptionCard
        title="Continue as Guest"
        subtitle="Scan and save locally"
        icon={<UserIconOutline width={30} height={30} />}
        onPress={continueAsGuest}
      />
    </View>
  );
};

export default AuthChoice;
