import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AlertMessage } from "../components/AlertMessage";
import { FillInForm } from "../components/FillInForm";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [loginCorrect, setLoginCorrect] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  return (
    <View style={style.container}>
      {!loginCorrect ? (
        <FillInForm
          headText="Login"
          subText="login in "
          type="login"
          setLoginCorrect={setLoginCorrect}
          setUser={setUser}
        />
      ) : (
        <AlertMessage
          user={user}
          headText={"Welcome"}
          subText={"See here the planning"}
          buttonText={"Planning"}
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
