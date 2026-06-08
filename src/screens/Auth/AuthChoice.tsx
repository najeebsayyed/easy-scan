import { View, Text } from 'react-native';
import React from 'react';
import ScanIcon from '../../assets/icons/scan.svg';
import AuthOptionCard from '../../components/AuthOptionCard';
import UserIconFilled from '../../assets/icons/profile_fill.svg';
import UserIconOutline from '../../assets/icons/profile_outline.svg';
import Divider from '../../components/Divider';

const AuthChoice = ({ navigation }: any) => {
  return (
    <View className="flex-1 bg-lightBg   px-7 justify-center py-10">
      {/* Top Section */}
      <View className=" flex-row self-center ">
        <Text className="text-5xl font-bold ">Easy</Text>
        <Text className="text-5xl font-bold text-primary">Scan</Text>
      </View>
      <Text className="self-center mt-2 text-lg font-bold text-gray-500">
        Fast. Clear. Simple.
      </Text>
      <View className="justify-center items-center bg-primary rounded-2xl h-auto w-auto self-center mt-2 mb-10">
        <ScanIcon height={160} width={160} color={'white'} />
      </View>

      {/* Auth Options */}
      <AuthOptionCard
        title="Login / Sign Up"
        subtitle="Access your documents on multiple devices"
        icon={<UserIconFilled width={30} height={30} />}
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
      <Divider label="or" />
      <AuthOptionCard
        title="Continue as Guest"
        subtitle="Scan and save locally"
        icon={<UserIconOutline width={30} height={30} />}
        onPress={() => {
          navigation.navigate('MainTabs');
        }}
      />
    </View>
  );
};

export default AuthChoice;
