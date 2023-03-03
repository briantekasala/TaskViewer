import { View, Text, StyleSheet } from "react-native";
import { ITaskList } from "../utils/ITaskList";

interface ITaksInformation {
  data: ITaskList[];
  task: string;
  userName: string;
}

export const TaskInformation = (props: ITaksInformation) => {
  const { data, task, userName } = props;

  return (
    <View>
      <View style={styles.container}>
        {data.map((day: ITaskList, index: number) => {
          const dayOnScreen = new Date(day.day);
          return (
            <Text
              style={styles.textStyle}
              key={`${dayOnScreen.toDateString()}-${index}`}
            >
              {dayOnScreen.toDateString()}
            </Text>
          );
        })}

        {task === "" ? (
          <Text style={styles.textStyle}>Vous n'avez pas de tâche </Text>
        ) : (
          <Text style={styles.textStyle}>
            {task}:{userName}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "rgb(255, 215, 245)",
    padding: 10,
  },
  textStyle: {
    fontSize: 25,
    textAlign: "center",
    padding: 10,
  },
});
