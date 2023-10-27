import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Userprofile from './pages/UserProfile.jsx';
import { NavigationContainer } from '@react-navigation/native'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Map from './pages/Map.jsx';
 function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
       <Stack.Navigator    initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Userprofile" component={Userprofile} options={{headerShown:false}} />
      <Stack.Screen name="Map" component={Map} options={{headerShown:false}} />


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
export default App