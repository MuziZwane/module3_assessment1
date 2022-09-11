import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import SplashScreen from './components/SplashScreen';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();
function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="AboutUs" 
        component={AboutUs} 
        options={{ title: 'About us' }}
      />
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{ title: 'Dashboard' }}
      />
       <Stack.Screen 
       name="Splashscreen" 
       component={SplashScreen} 
       options={{ title: 'SplashScreen' }}
      />
      <Stack.Screen 
       name="Login" 
       component={Login} 
       options={{ title: 'Login' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack/>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
