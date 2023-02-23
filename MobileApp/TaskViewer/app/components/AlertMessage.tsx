import { Card, Button } from "react-native-paper";
import { Text } from "react-native";

export const AlertMessage = () => {
  return (
    <Card>
      <Card.Title title="Success" />
      <Card.Content>
        <Text>Welcome user name</Text>
        <Text>See here the planning</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained">Planning</Button>
      </Card.Actions>
    </Card>
  );
};
