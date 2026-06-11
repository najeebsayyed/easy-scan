import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import DismissKeyboardView from '../components/DismissKeyboardView';

export default function RootNavigator() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { isGuest, setIsGuest } = useAuth();

  useEffect(() => {
    const initialize = async () => {
      const guest = await AsyncStorage.getItem('isGuest');

      setIsGuest(guest === 'true');
      setLoading(false);
    };

    initialize();

    const unsubscribe = auth().onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, [setIsGuest]);

  if (loading) {
    return null;
  }

  return (
    <DismissKeyboardView>
      <NavigationContainer>
        {user || isGuest ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </DismissKeyboardView>
  );
}
