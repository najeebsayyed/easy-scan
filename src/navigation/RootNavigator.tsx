import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
// import AppNavigator from './AppNavigator';
import DismissKeyboardView from '../components/DismissKeyboardView';

export default function RootNavigator() {
  //   const { user, isGuest } = useSelector((state: RootState) => state.auth);

  return (
    <DismissKeyboardView>
      <NavigationContainer>
        {/* {user || isGuest ? <AppNavigator /> : <AuthNavigator />} */}
        <AuthNavigator />
      </NavigationContainer>
    </DismissKeyboardView>
  );
}
