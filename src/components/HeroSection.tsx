import { View, Text } from 'react-native';

type HeroSectionProps = {
  title: string;
  subtitle: string;
  classname?: string;
  titleStyle?: string;
  subtitleStyle?: string;
};

const HeroSection = ({
  title,
  subtitle,
  classname = '',
  titleStyle = '',
  subtitleStyle = '',
}: HeroSectionProps) => {
  return (
    <View className={` self-center mb-14 ${classname}`}>
      <Text className={`font-bold text-2xl  ${titleStyle}`}>{title}</Text>

      <Text
        className={`font-semibold self-center text-lg  mt-1 ${subtitleStyle}`}
        numberOfLines={2}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default HeroSection;
