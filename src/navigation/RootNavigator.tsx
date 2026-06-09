import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import DismissKeyboardView from '../components/DismissKeyboardView';

export default function RootNavigator() {
  const [user, setUser] = useState<any>(undefined);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(setUser);

    return unsubscribe;
  }, []);

  if (user === undefined) {
    return null;
  }

  return (
    <DismissKeyboardView>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </DismissKeyboardView>
  );
}
