import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnboardingScreen from "./src/screens/onboardingscreens/OnboardingScreen";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import OtpVerification from "./src/screens/OtpVerification";
import Agreement from "./src/screens/Agreement";
import MapScreen from "./src/screens/MapScreen";




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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
