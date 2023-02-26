import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlanningScreen } from "../PlanningScreen";
import { UserTaskScreen } from "../UserTaskScreen";

const Tab = createBottomTabNavigator();

export const PlanningTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Schedule" component={PlanningScreen} />
      <Tab.Screen name="UserTask" component={UserTaskScreen} />
    </Tab.Navigator>
  );
};
