import { View, Text, TouchableOpacity } from 'react-native';

type AuthSwitchTextProps = {
  question: string;
  actionText: string;
  onPress: () => void;
};

const AuthSwitchText = ({
  question,
  actionText,
  onPress,
}: AuthSwitchTextProps) => {
  return (
    <View className="flex-row justify-center mt-4">
      <Text className="text-textSecondary dark:text-darkSecondary ">
        {question}{' '}
      </Text>

      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Text className="text-primary font-bold dark:text-darkPrimary  ">
          {actionText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthSwitchText;
