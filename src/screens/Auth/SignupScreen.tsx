import { View } from 'react-native';
import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import PrimaryInput from '../../components/PrimaryInput';
import EmailIcon from '../../assets/icons/email.svg';
import LockIcon from '../../assets/icons/lock.svg';
import UserIcon from '../../assets/icons/profile_outline.svg';
import PrimaryButton from '../../components/PrimaryButton';
import Divider from '../../components/Divider';
import AuthSwitchText from '../../components/AuthSwitchText';

const SignupScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="flex-1 bg-lightBg   px-7 justify-center py-10">
      <HeroSection title="Create Account" subtitle="Sign up to get started" />
      <PrimaryInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        type="text"
        icon={<UserIcon height={24} width={24} color={'#64748B'} />}
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
      />
      <PrimaryButton title="Sign Up" />
      <Divider />
      <AuthSwitchText
        question="Already have an account? "
        actionText="Log In"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

export default SignupScreen;
