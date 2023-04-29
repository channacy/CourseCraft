import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const homeName = "Home";
const loginName = "Login";
const welcomeName = "Welcome";

function HomeStack(){
    return(
    
        <Stack.Navigator>
            <Stack.Screen name={homeName} component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default function MainContainer(){
    return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={welcomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } 
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       >
        <Tab.Screen name={homeName} component={HomeStack} />
        <Tab.Screen name={welcomeName} component={WelcomeScreen} options={{ tabBarButton: () => null, tabBarVisible: false }}/>
        <Tab.Screen name={loginName} component={LoginScreen} options={{ tabBarButton: () => null, tabBarVisible: false }} />

      </Tab.Navigator>
    </NavigationContainer>

    )

}
