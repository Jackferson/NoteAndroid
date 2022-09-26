import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, View, StyleSheet, Text } from "react-native";
import HomeNavigator from "./components/HomeNavigator";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const [req, res, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "1099020540551-phgkkelm5od5ds8js7i12kf4703v52pt.apps.googleusercontent.com",
    webClientId:
      "1099020540551-54j4flklb6gg0pps04rdq099rde4bohc.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (res?.type === "success") {
      setAccessToken(res.authentication.accessToken);
      getUserData();
    }
  }, [res]);

  const getUserData = async () => {
    let userInfo = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await userInfo.json();
    setUser(data);
  };

  const ShowUser = () => {
    if (user) {
      return <Text style={styles.init}>{user.name}</Text>;
    }
  };

  return (
    <>
      {user && <ShowUser />}
      {user === null && (
        <View style={styles.init}>
          <Text>Nothing</Text>
          <Button
            disabled={!req}
            onPress={() => {
              console.log(res);
              promptAsync();
            }}
            title={"logIn"}
          />
        </View>
      )}
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
