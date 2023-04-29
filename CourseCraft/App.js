import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import { ScreenStack } from 'react-native-screens';
import { BottomTabView } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeTabs(){
  return(
    <Tab.Navigator
      initialRouteName={"Home"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Settings") {
              iconName = focused ? 'settings' : 'settings-outline';

            } else if (rn === "Courses") {
              iconName = focused ? 'book' : 'book-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4E77F3',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  )
}
export default function App() {
  return (
 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
            />
          <Stack.Screen name="Home" component={HomeTabs} />
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
