import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import RightIcon from '../assets/icons/arrow_forward.svg';

interface AuthOptionCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onPress: () => void;
  highlighted?: boolean;
}

const AuthOptionCard = ({
  title,
  subtitle,
  icon,
  onPress,
}: AuthOptionCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="flex-row items-center justify-between rounded-2xl border px-4 py-4 mb-3 mt-3 bg-white
     border-gray-200"
    >
      <View className="flex-row items-center flex-1">
        <View className="h-14 w-14 rounded-xl items-center justify-center bg-[#2563EB]">
          {icon}
        </View>

        <View className="ml-4 flex-1">
          <Text className="text-base font-bold text-gray-900">{title}</Text>

          <Text className="text-sm text-gray-500 mt-1">{subtitle}</Text>
        </View>
      </View>

      <RightIcon width={22} height={22} />
    </TouchableOpacity>
  );
};

export default AuthOptionCard;
