import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { ILoginService } from "../services/contracts/ILoginService";
import { LoginService } from "../services/LoginService";
import { ILogin } from "../utils/Ilogin";

interface IFillInForm {
  type: string;
  setLoginCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

export const FillInForm = (props: IFillInForm) => {
  const { control, handleSubmit } = useForm();
  const { type, setLoginCorrect, setUser } = props;
  const services = new LoginService("http://192.168.1.21:3008");

  const onSubmit = async (data: any) => {
    if (type === "login") {
      const user: ILogin[] = await services.checkUser(data);
      console.log(user.length);
      if (user.length === 1) {
        setLoginCorrect((prevState) => !prevState);
        setUser(user[0].user);
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
            <TextInput
              style={style.cardText}
              label={"user"}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              secureTextEntry
              style={style.cardText}
              label={"password"}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
      </Card.Content>
      <Card.Actions style={style.cardButtonContainer}>
        <Button
          style={style.cardButtonContainer}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          login
        </Button>
        <Button style={style.cardButtonContainer} mode="contained">
          Sign
        </Button>
      </Card.Actions>
    </Card>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    width: 275,
  },
  cardText: {
    marginBottom: 25,
  },
  cardButtonContainer: {
    position: "relative",
    marginRight: 20,
    marginBottom: 10,
  },
});
