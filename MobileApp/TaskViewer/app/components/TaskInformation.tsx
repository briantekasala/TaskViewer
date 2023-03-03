import { View, Text } from "react-native";
import { ITaskList } from "../utils/ITaskList";

interface ITaksInformation {
  data: ITaskList[];
  task: string;
  userName: string;
}

export const TaskInformation = (props: ITaksInformation) => {
  const { data, task, userName } = props;

  return (
    <>
      <View>
        {data.map((day: ITaskList, index: number) => {
          const dayOnScreen = new Date(day.day);
          return (
            <Text key={`${dayOnScreen.toDateString()}-${index}`}>
              {dayOnScreen.toDateString()}
            </Text>
          );
        })}
      </View>
      <View>
        {task === "" ? (
          <Text>u heeft geen taak</Text>
        ) : (
          <Text>
            {task}:{userName}
          </Text>
        )}
      </View>
    </>
  );
};
