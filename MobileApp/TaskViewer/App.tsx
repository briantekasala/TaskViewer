import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./app/screens/LoginScreen";
import { PlanningScreen } from "./app/screens/PlanningScreen";
import { SignUpScreen } from "./app/screens/SignUpScreen";
import { PlanningTabs } from "./app/screens/tabs/PlanningTabs";

export type StackParams = {
  Login: undefined;
  SignUp: undefined;
  Planning: {
    screen: string;
    params: { user: string };
  };
};
const Stack = createNativeStackNavigator<StackParams>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Planning" component={PlanningTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
