import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { ILoginService } from "../services/contracts/ILoginService";
import { LoginService } from "../services/LoginService";

interface IFillInForm {
  type: string;
  setLoginCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FillInForm = (props: IFillInForm) => {
  const { control, handleSubmit } = useForm();
  const { type, setLoginCorrect } = props;
  const services = new LoginService("http://192.168.1.21:3008");

  const onSubmit = async (data: any) => {
    if (type === "login") {
      const user: ILoginService[] = await services.checkUser(data);
      console.log(user.length);
      if (user.length === 1) {
        setLoginCorrect((prevState) => !prevState);
      }
    }

    if (type === "signUp") {
    }
  };
  return (
    <Card style={style.cardContainer}>
      <Card.Title title="Login" subtitle="login in" />
      <Card.Content>
        <Controller
          name="user"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput label={"user"} onChangeText={onChange} value={value} />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry
              label={"password"}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          login
        </Button>
        <Button mode="contained">Sign</Button>
      </Card.Actions>
    </Card>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    width: 275,
  },
});
