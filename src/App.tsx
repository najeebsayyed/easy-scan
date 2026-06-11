import {} from 'react-native';
import React from 'react';
import '../global.css';
import RootNavigator from './navigation/RootNavigator';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;
