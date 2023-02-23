import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AlertMessage } from "../components/AlertMessage";
import { FillInForm } from "../components/FillInForm";

export const LoginScreen = () => {
  const [loginCorrect, setLoginCorrect] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  return (
    <View>
      {!loginCorrect ? (
        <FillInForm
          type="login"
          setLoginCorrect={setLoginCorrect}
          setUser={setUser}
        />
      ) : (
        <AlertMessage user={user} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    width: 275,
  },
});
