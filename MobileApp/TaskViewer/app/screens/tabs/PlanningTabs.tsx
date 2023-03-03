import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlanningScreen } from "../PlanningScreen";
import { UserTaskScreen } from "../UserTaskScreen";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParams } from "../../../App";
import { useEffect, useState } from "react";
import { ITaskList } from "../../utils/ITaskList";
import { TaskService } from "../../services/TaskService";

const Tab = createBottomTabNavigator();

export const PlanningTabs = () => {
  const route = useRoute<RouteProp<StackParams, "Planning">>();
  const api: string = "http://192.168.1.21:3008";
  const [dbTaskList, setDbTaskList] = useState<ITaskList[]>([]);
  useEffect(() => {
    const getTaskList = async () => {
      const taskList = new TaskService(api);
      setDbTaskList(await taskList.getTaskList());
    };
    getTaskList();
  }, []);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="TaskList"
        children={() => <PlanningScreen dbTaskList={dbTaskList} />}
      />
      <Tab.Screen
        name="UserTask"
        children={() => (
          <UserTaskScreen
            user={route.params.params.user}
            dbTaskList={dbTaskList}
          />
        )}
      />
    </Tab.Navigator>
  );
};
