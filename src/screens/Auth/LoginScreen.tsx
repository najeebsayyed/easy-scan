import { View } from 'react-native';
import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import PrimaryInput from '../../components/PrimaryInput';
import EmailIcon from '../../assets/icons/email.svg';
import LockIcon from '../../assets/icons/lock.svg';
import PrimaryButton from '../../components/PrimaryButton';
import Divider from '../../components/Divider';
import AuthSwitchText from '../../components/AuthSwitchText';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="flex-1 bg-lightBg   px-7 justify-center py-10">
      <HeroSection
        title="Welcome Back!"
        subtitle="Log in to continue scanning"
      />
      <PrimaryInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        type="email"
        icon={<EmailIcon />}
      />
      <PrimaryInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        type="password"
        icon={<LockIcon />}
        rightText="Forgot Password?"
      />
      <PrimaryButton title="Log In" />
      <Divider />
      <AuthSwitchText
        question="Don't have an account? "
        actionText="Sign Up"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

export default LoginScreen;
