import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { StackParams } from "../../App";
import { LoginService } from "../services/LoginService";
import { ILogin } from "../utils/Ilogin";

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
        setLoginCorrect((prevState) => !prevState);
        setUser(user[0].user);
      }
    }
    if (type === "signUp") {
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
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={style.cardText}
              label={"user"}
              onChangeText={onChange}
              value={value}
            />
          )}
          rules={{ required: true }}
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
          rules={{ required: true }}
        />
        {type === "signUp" && (
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={style.cardText}
                label={"email"}
                onChangeText={onChange}
                value={value}
              />
            )}
            rules={{ required: true }}
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
});
