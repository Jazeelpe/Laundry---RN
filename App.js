import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnboardingScreenOne from "./src/screens/onboardingscreens/OnboardingScreenOne";
import OnboardingScreenTwo from "./src/screens/onboardingscreens/OnboardingScreenTwo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen
            name="OnboardingScreenOne"
            component={OnboardingScreenOne}
          />
          <Stack.Screen
            name="OnboardingScreenTwo"
            component={OnboardingScreenTwo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

