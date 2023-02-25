import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AlertMessage } from "../components/AlertMessage";
import { FillInForm } from "../components/FillInForm";

export const SignUpScreen = () => {
  const [loginCorrect, setLoginCorrect] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  return (
    <View style={style.container}>
      {!loginCorrect ? (
        <FillInForm
          headText="Sign In"
          subText="make a account to login"
          setUser={setUser}
          setLoginCorrect={setLoginCorrect}
          type="signUp"
        />
      ) : (
        <AlertMessage
          user={user}
          headText={"Welcome"}
          subText={"login in to see planning"}
          buttonText={"Login"}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    width: 275,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
