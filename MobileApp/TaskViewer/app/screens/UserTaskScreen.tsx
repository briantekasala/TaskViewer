import { View, Text, StyleSheet, StatusBar } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParams } from "../../App";
import { ITaskList } from "../utils/ITaskList";
import { TaskView } from "../components/TaskView";

interface IUserTaskScreen {
  user: string;
  dbTaskList: ITaskList[];
}

export const UserTaskScreen = (props: IUserTaskScreen) => {
  const { user, dbTaskList } = props;
  const getWednesdayDate = () => {
    const today = new Date();
    let wednesday;
    const dayNumber = today.getDay() === 0 ? 7 : today.getDay();

    //guard Clauses
    if (dayNumber < 3) {
      const numberToAdd = 3 - dayNumber;
      today.setDate(today.getDate() + numberToAdd);
      wednesday = today;
      return wednesday;
    }

    if (dayNumber > 3) {
      const numberToSubtract = dayNumber - 3;
      today.setDate(today.getDate() - numberToSubtract);
      wednesday = today;
      return wednesday;
    }
    return today;
  };
  const getSundayDate = () => {
    const today = new Date();
    let sunday;
    const dayNumber = today.getDay() === 0 ? 7 : today.getDay();

    if (dayNumber < 7) {
      const numberToAdd = 7 - dayNumber;
      today.setDate(today.getDate() + numberToAdd);
      sunday = today;
      return sunday;
    }

    return today;
  };

  const getTodayTasks = (date: Date) => {
    const day = date.toDateString();
    const taskData = dbTaskList.filter(
      (data) => new Date(data.day).toDateString() === day
    );

    return taskData;
  };
  const getNextWeekTask = (date: Date) => {
    date.setDate(date.getDate() + 7);
    let nextWeekTask = date;
    const nextWeekTaskData = dbTaskList.filter(
      (data) =>
        new Date(data.day).toDateString() === nextWeekTask.toDateString()
    );
    return nextWeekTaskData;
  };
  const wednesday = getWednesdayDate();
  const sunday = getSundayDate();
  return (
    <>
      <View style={styles.todayTaskContainer}>
        <TaskView
          taskData={getTodayTasks(wednesday)}
          nextWeekTaskData={getNextWeekTask(wednesday)}
          userName={user}
        />
      </View>
      <View style={styles.nextWeekTaskContainer}>
        <TaskView
          userName={user}
          taskData={getTodayTasks(sunday)}
          nextWeekTaskData={getNextWeekTask(sunday)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  todayTaskContainer: {
    alignItems: "center",
  },
  nextWeekTaskContainer: {
    alignItems: "center",
  },
});
