import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./app/screens/LoginScreen";
import { SignUpScreen } from "./app/screens/SignUpScreen";

export type StackParams = {
  Login: undefined;
  SignUp: undefined;
  Planning: undefined;
};
const Stack = createNativeStackNavigator<StackParams>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Planning" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
