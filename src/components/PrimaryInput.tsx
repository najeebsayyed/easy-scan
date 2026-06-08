import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import type { ReactNode } from 'react';

import VisibilityIcon from '../assets/icons/visibility.svg';
import VisibilityOffIcon from '../assets/icons/visibility_off.svg';

type PrimaryInputProps = TextInputProps & {
  rightText?: string;
  onRightPress?: () => void;
  type?: 'text' | 'email' | 'password';
  icon?: ReactNode;
};

const PrimaryInput = ({
  placeholder,
  value,
  onChangeText,
  type = 'text',
  rightText,
  onRightPress,
  icon,
  secureTextEntry,
  ...props
}: PrimaryInputProps) => {
  const [secure, setSecure] = useState(type === 'password' || secureTextEntry);

  return (
    <View className="mb-4 mt-4 ">
      <View className="flex-row items-center border border-[#64748B] rounded-2xl px-4 py-1 bg-white">
        {icon && <View className="mr-2">{icon}</View>}

        <TextInput
          className="flex-1 text-black text-sm h-12"
          placeholder={placeholder}
          placeholderTextColor="#8FA39D"
          value={value}
          onChangeText={onChangeText}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          secureTextEntry={secure}
          autoCapitalize={type === 'email' ? 'none' : 'sentences'}
          {...props}
        />

        {type === 'password' && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setSecure(prev => !prev)}
          >
            {secure ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </TouchableOpacity>
        )}
      </View>

      {rightText && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onRightPress}
          className="self-end mt-2"
        >
          <Text className="text-primary font-bold text-sm">{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PrimaryInput;
