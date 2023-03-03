import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View, Text } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { StackParams } from "../../App";
import { LoginService } from "../services/LoginService";
import { ILogin } from "../utils/ILogin";

interface IFillInForm {
  type: string;
  setLoginCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  headText: string;
  subText: string;
}

export const FillInForm = (props: IFillInForm) => {
  const { control, handleSubmit } = useForm();
  const { type, setLoginCorrect, setUser, headText, subText } = props;
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const services = new LoginService("http://192.168.1.21:3008");

  const onSubmit = async (data: any) => {
    if (type === "login") {
      const user: ILogin[] = await services.checkUser(data);
      if (user.length === 1) {
        setUser(user[0].user);
        setLoginCorrect((prevState) => !prevState);
      }
    }
    if (type === "signUp") {
      const signUpUser = await services.signUpUser(data);
      setLoginCorrect((prevState) => !prevState);
    }
  };
  return (
    <Card style={style.cardContainer}>
      <Card.Title title={headText} subtitle={subText} />
      <Card.Content>
        <Controller
          name="user"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                style={[style.cardText]}
                label={"user"}
                onChangeText={onChange}
                value={value}
                underlineColor={error ? "red" : "rgb(109, 88, 105)"}
              />
              {error && (
                <Text style={style.cardErrorText}>{error.message}</Text>
              )}
            </View>
          )}
          rules={{ required: "User name should not be empty" }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <View>
              <TextInput
                secureTextEntry
                style={style.cardText}
                label={"password"}
                onChangeText={onChange}
                value={value}
                underlineColor={error ? "red" : "rgb(109, 88, 105)"}
              />
              {error && (
                <Text style={style.cardErrorText}>{error.message}</Text>
              )}
            </View>
          )}
          rules={{ required: "password should not be empty " }}
        />
        {type === "signUp" && (
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View>
                <TextInput
                  style={style.cardText}
                  label={"email"}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  underlineColor={error ? "red" : "rgb(109, 88, 105)"}
                />
                {error && (
                  <Text style={style.cardErrorText}>{error.message}</Text>
                )}
              </View>
            )}
            rules={{ required: "email should not be empty " }}
          />
        )}
      </Card.Content>
      <Card.Actions>
        {type === "signUp" ? (
          <Button
            style={style.cardButtonSignIn}
            mode="contained"
            onPress={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
        ) : (
          <>
            <Button
              style={style.cardButtonLogin}
              mode="contained"
              onPress={handleSubmit(onSubmit)}
            >
              Login
            </Button>
            <Button
              style={style.cardButtonSign}
              mode="contained"
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              Sign
            </Button>
          </>
        )}
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
  cardButtonLogin: {
    position: "relative",
    marginRight: 25,
    marginBottom: 10,
  },
  cardButtonSign: {
    position: "relative",
    marginRight: 45,
    marginBottom: 10,
  },
  cardButtonSignIn: {
    position: "relative",
    marginRight: 80,
    marginBottom: 10,
  },
  cardErrorText: {
    color: "red",
    alignSelf: "stretch",
    marginBottom: 10,
  },
});
