import { Card, Button } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
interface IAlertMessage {
  user: string;
}
export const AlertMessage = (props: IAlertMessage) => {
  const { user } = props;
  return (
    <Card style={style.alertContent}>
      <Card.Title title="Success" titleStyle={style.alertText} />
      <Card.Content>
        <Text style={style.alertText}>Welcome {user}</Text>
        <Text style={style.alertText}>See here the planning</Text>
      </Card.Content>
      <Card.Actions style={style.alertButton}>
        <Button mode="contained">Planning</Button>
      </Card.Actions>
    </Card>
  );
};

const style = StyleSheet.create({
  alertContent: {
    width: 250,
    height: 200,
  },
  alertText: {
    color: "rgba(27,94,32,1.0)",
    fontSize: 18,
  },
  alertButton: {
    paddingTop: 35,
    marginRight: 60,
  },
});
