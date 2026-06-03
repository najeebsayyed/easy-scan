import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import PreviewScreen from '../screens/Preview/PreviewScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      <Stack.Screen name="Preview" component={PreviewScreen} />
    </Stack.Navigator>
  );
}
