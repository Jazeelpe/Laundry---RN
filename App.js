import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnboardingScreen from "./src/screens/onboardingscreens/OnboardingScreen";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import OtpVerification from "./src/screens/OtpVerification";
import Agreement from "./src/screens/Agreement";
import MapScreen from "./src/screens/MapScreen";
import Home from "./src/screens/Home";
import CustomFooter from "./src/components/CustomFooter";
import Booking from "./src/screens/Booking";
import History from "./src/screens/History";
import Menu from "./src/screens/Menu";
import ServicesPage from "./src/screens/ServicesPage";
import BookingConfirm from "./src/screens/BookingConfirm";
import OrderStatus from "./src/screens/OrderStatus";
import ProfileDetail from "./src/screens/ProfileDetail";
import AddressPage from "./src/screens/AddressPage";
import PaymentPage from "./src/screens/PaymenPage";
import NotificationPage from "./src/screens/NotificationPage";
import { store } from "./src/store/store";
import {  Provider } from "react-redux";
import SavedAdressPage from "./src/screens/SavedAdressPage";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomFooter {...props} />}
    >
      <Tab.Screen name="NewStack" component={NewStack} />
      <Tab.Screen name="Booking" component={Booking} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

function AppNavigation() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="Otp" component={OtpVerification} />
          <Stack.Screen name="Agreement" component={Agreement} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="ConfirmPage" component={BookingConfirm} />
          <Stack.Screen name="OrderStatus" component={OrderStatus} />
          <Stack.Screen name="AddressPage" component={AddressPage} />
          <Stack.Screen name="PaymentPage" component={PaymentPage} />
          <Stack.Screen name="NotificationPage" component={NotificationPage} />
          <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
          <Stack.Screen name="SavedAddressPage" component={SavedAdressPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const StackTwo = createNativeStackNavigator();

const NewStack = () => {
  return (
    <StackTwo.Navigator screenOptions={{ headerShown: false }}>
      <StackTwo.Screen name="Home" component={Home} />
      <StackTwo.Screen name="ServicePage" component={ServicesPage} />
    </StackTwo.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};
export default App;
