import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackParams } from "../../App";
import { TaskList } from "../components/TaskList";
import { TaskService } from "../services/TaskService";
import { ITaskList } from "../utils/ITaskList";

interface IPlanningScreen {
  dbTaskList: ITaskList[];
}
export const PlanningScreen = (props: IPlanningScreen) => {
  const { dbTaskList } = props;
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
