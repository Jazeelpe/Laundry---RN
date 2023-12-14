import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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


const Tab = createBottomTabNavigator();

const BottomTab = ()=>{
   return(
    <Tab.Navigator screenOptions={{headerShown:false}} tabBar={props=> <CustomFooter {...props} />}>
      <Tab.Screen name="NewStack" component={NewStack}/>
      <Tab.Screen name="Booking" component={Booking}/>
      <Tab.Screen name="History" component={History}/>
      <Tab.Screen name="Menu" component={Menu}/>
    </Tab.Navigator>
   )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}  >
          <Stack.Screen
            name="OnboardingScreenTwo"
            component={OnboardingScreen}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name='Otp' component={OtpVerification}/>
          <Stack.Screen name="Agreement" component={Agreement}/>
          <Stack.Screen name="MapScreen"  component={MapScreen}/>
          <Stack.Screen name="BottomTab" component={BottomTab}/>
          <Stack.Screen name="ConfirmPage" component={BookingConfirm}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const StackTwo = createNativeStackNavigator();

 const NewStack = ()=>{
  return(
    <StackTwo.Navigator screenOptions={{headerShown:false}}>
      <StackTwo.Screen name="Home" component={Home}/>
      <StackTwo.Screen name="ServicePage" component={ServicesPage} />
    </StackTwo.Navigator>
  )
 }
