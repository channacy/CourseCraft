import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
        

  </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
