import { View, Text, StyleSheet, StatusBar } from "react-native";

type TaskListProps = {
  date: string;
  microG: string;
  microD: string;
  microPoduim: string;
  usher: string;
  sono: string;
};

export const TaskList = (props: TaskListProps) => {
  const { date, microG, microD, microPoduim, usher, sono } = props;
  return (
    <View style={styles.item}>
      <Text style={[styles.title, { textAlign: "center" }]}>{date}</Text>
      <Text
        style={[
          styles.title,
          {
            backgroundColor: "#4472C4",
            width: "100%",
            textAlign: "center",
            padding: 10,
          },
        ]}
      >
        {microG}
      </Text>
      <Text
        style={[
          styles.title,
          {
            backgroundColor: "#f79646",
            width: "100%",
            textAlign: "center",
            padding: 10,
          },
        ]}
      >
        {microD}
      </Text>
      <Text
        style={[
          styles.title,
          {
            backgroundColor: "#4bacc6",
            width: "100%",
            textAlign: "center",
            padding: 10,
          },
        ]}
      >
        {microPoduim}
      </Text>
      <Text
        style={[
          styles.title,
          {
            backgroundColor: "#9bbb59",
            width: "100%",
            textAlign: "center",
            padding: 10,
          },
        ]}
      >
        {usher}
      </Text>
      <Text
        style={[
          styles.title,
          {
            backgroundColor: "#e66c7d",
            width: "100%",
            textAlign: "center",
            padding: 10,
          },
        ]}
      >
        {sono}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "rgb(255, 255, 255)",
  },
  item: {
    backgroundColor: "rgb(255, 215, 245)",
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
});
