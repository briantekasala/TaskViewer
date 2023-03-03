import React from "react";
import { View } from "react-native";
import { ITaskList } from "../utils/ITaskList";
import { TaskInformation } from "./TaskInformation";

interface ITaskView {
  userName: string;
  taskData: ITaskList[];
  nextWeekTaskData: ITaskList[];
}

export const TaskView = (props: ITaskView) => {
  const { userName, taskData, nextWeekTaskData } = props;
  const getUserTask = (data: ITaskList[]) => {
    let taskOfUser = "";
    data.forEach((task) => {
      const entries = Object.entries(task);
      for (const [key, value] of entries) {
        if (value === userName) {
          if (key === "nameMicroG") {
            return (taskOfUser = "microG");
          }
          if (key === "nameMicroD") {
            return (taskOfUser = "microD");
          }
          if (key === "usher") {
            return (taskOfUser = "acceuil");
          }
          taskOfUser = key;
        }
      }
    });
    return taskOfUser;
  };
  getUserTask(taskData);
  const task =
    getUserTask(taskData).charAt(0).toUpperCase() +
    getUserTask(taskData).slice(1);
  const nextWeekTask =
    getUserTask(nextWeekTaskData).charAt(0).toUpperCase() +
    getUserTask(nextWeekTaskData).slice(1);

  return (
    <View>
      <TaskInformation
        key={`${userName}-Information-1`}
        data={taskData}
        task={task}
        userName={userName}
      />
      <TaskInformation
        key={`${userName}-Information-2`}
        data={nextWeekTaskData}
        task={nextWeekTask}
        userName={userName}
      />
    </View>
  );
};
