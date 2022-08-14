import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { store } from "./src/redux/store";
import { TailwindProvider } from "tailwindcss-react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MapScreen from "./src/screens/MapScreen";
import EatsScreen from "./src/screens/EatsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Provider store={store}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -60 : 0}
          >
            <TailwindProvider>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MapScreen" component={MapScreen} />
                <Stack.Screen name="EatsScreen" component={EatsScreen} />
              </Stack.Navigator>
            </TailwindProvider>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
