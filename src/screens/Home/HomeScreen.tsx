import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SectionLabel from '../../components/SectionLabel';
import ScanIcon from '../../assets/icons/scan.svg';

const HomeScreen = ({ navigation }: any) => {
  const { isGuest, setIsGuest } = useAuth();
  const user = auth().currentUser;
  const handleLogin = async () => {
    await AsyncStorage.removeItem('isGuest');
    setIsGuest(false);
  };
  return (
    <View className="flex-1 bg-lightBg   px-7  py-10">
      <View className=" h-[50%] justify-center items-center">
        <View className="flex-row self-center mb-3">
          <Text className="text-5xl font-bold">Easy</Text>
          <Text className="text-5xl font-bold text-primary">Scan</Text>
        </View>

        <View className="bg-primary flex-row w-full h-72 items-center justify-center rounded-2xl">
          <TouchableOpacity
            className="justify-center items-center "
            onPress={() => {
              navigation.navigate('Scanner');
            }}
          >
            <ScanIcon
              height={160}
              width={160}
              color={'white'}
              className="self-center"
            />
            <Text className="text-xl font-semibold text-white text-center">
              Tap to start scanning
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {user ? (
          <SectionLabel label="Recent Scans:" />
        ) : isGuest ? (
          <View className="bg-white p-5 rounded-xl">
            <SectionLabel label="Recent Scans:" />
            <Text className="text-gray-600 mt-2">Login to:</Text>
            <Text className="text-gray-600 mt-1">• View recent scans</Text>
            <Text className="text-gray-600">• Backup documents to cloud</Text>
            <Text className="text-gray-600">
              • Access scans on multiple devices
            </Text>
            <TouchableOpacity
              className="bg-primary px-6 py-3 rounded-xl mt-4 self-center"
              onPress={handleLogin}
            >
              <Text className="text-white font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text className="text-xl font-bold">Not Authenticated</Text>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
