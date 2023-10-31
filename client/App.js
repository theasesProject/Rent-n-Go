import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Carousel from "./pages/Carousel.jsx";
import LoadingScreen from "./pages/Loading.jsx";
import store from "./store/store";
import { Provider } from "react-redux";
import UserProfile from "./pages/UserProfile.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ConfirmIdentity from "./pages/ConfirmIdentity.jsx";
import EditProfile from "./pages/EditProfile.jsx";

//! DO NOT TOUCH THIS IMPORT OR CHANGE ANYTHING ABOUT IT
import SignUp from "./pages/signUp.jsx";
("DO NOT TOUCH THIS IMPORT OR CHANGE ANYTHING ABOUT IT");

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen
            name="Carousel"
            component={Carousel}
          /> */}
          <Stack.Screen
            name="Userprofile"
            component={UserProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="forgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="confirmIdentity"
            component={ConfirmIdentity}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="editProfile"
            component={EditProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
