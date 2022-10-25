import React, { useEffect, useContext } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { StyleSheet, View, Text, Button } from "react-native";
import UserContext from "../context/UserContext";

WebBrowser.maybeCompleteAuthSession();

export default function Logger() {
  const { updateUser, setLoading } = useContext(UserContext);

  const [req, res, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "1099020540551-phgkkelm5od5ds8js7i12kf4703v52pt.apps.googleusercontent.com",
    webClientId:
      "1099020540551-54j4flklb6gg0pps04rdq099rde4bohc.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (res?.type === "success") {
      const accessToken = res.authentication.accessToken;
      getUserData(accessToken);
      // setLoading(true);
    }
  }, [res]);

  const getUserData = async (accessToken) => {
    fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.json())
    .then((data) => {
        updateUser(data);
      })
      .catch((error) => {
        console.log('error',error);
      });
  };

  return (
    <>
      <View style={styles.init}>
        <Text>Nothing</Text>
        <Button
          disabled={!req}
          onPress={() => {
            promptAsync();
          }}
          title={"logIn"}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  init: {
    fontSize: 28,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
