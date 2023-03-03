import { Card, Button } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
interface IAlertMessage {
  user: string;
  headText: string;
  subText: string;
  buttonText: string;
}
export const AlertMessage = (props: IAlertMessage) => {
  const { user, headText, subText, buttonText } = props;
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <Card style={style.alertContent}>
      <Card.Title title="Success" titleStyle={style.alertText} />
      <Card.Content>
        <Text style={style.alertText}>
          {user === "" ? headText : `${headText} ${user}`}
        </Text>
        <Text style={style.alertText}>{subText}</Text>
      </Card.Content>
      <Card.Actions style={style.alertButton}>
        {buttonText === "Login" ? (
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate(`Login`);
            }}
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate(`Planning`, {
                screen: "Planning",
                params: { user: user },
              });
            }}
          >
            {buttonText}
          </Button>
        )}
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
