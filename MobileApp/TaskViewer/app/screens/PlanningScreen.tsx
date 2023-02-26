import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TaskList } from "../components/TaskList";
import { TaskService } from "../services/TaskService";
import { ITaskList } from "../utils/ITaskList";

export const PlanningScreen = () => {
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
    <SafeAreaView style={styles.container}>
      <TaskList
        date=""
        microG="Micro Gauche"
        microD="Micro Droite"
        microPoduim="Micro Poduim"
        usher="Acceuil"
        sono="Sono"
      />
      {
        <FlatList
          data={dbTaskList}
          renderItem={({ item }) => (
            <TaskList
              date={new Date(item.day).toDateString()}
              microG={item.nameMicroG}
              microD={item.nameMicroD}
              microPoduim={item.microPodium}
              usher={item.usher}
              sono={item.sono}
            />
          )}
          keyExtractor={(item, index) => `${item.usher}-${index}`}
        />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "rgb(255, 255, 255)",
  },
});
