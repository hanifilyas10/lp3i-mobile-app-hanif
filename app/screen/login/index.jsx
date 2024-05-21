import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { MyButton } from "../../component";
import { ICGoogle, ICFacebook } from "../../../assets";

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePassword] = React.useState("");

  const onSubmitLogin = () => {
    if (email == "hanif" && pass == 123) {
      alert("Sudah Benar");
    } else {
      alert("Salah");
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 400 }}>
          <ImageBackground
            source={require("../../../assets/images/Subtract.png")}
            resizeMode="cover"
            style={{ width: windowWidth, height: 400 }}
          >
            <View style={style.brandStyle}>
              <Image source={require("../../../assets/images/Brand.png")} />
            </View>

            <Text style={style.textLoginStyle}>Login</Text>
          </ImageBackground>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder="Username or Email"
            placeholderTextColor="#c7c7c7"
            value={email}
          />

          <Text style={[style.textLabel, { marginTop: 20 }]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder="Password"
            placeholderTextColor="#c7c7c7"
            value={pass}
          />

          <Button onPress={onSubmitLogin} color="green" title="Login" />
        </View>
        <View style={style.btnContainer}>
          <MyButton text="Google" imgUrl={ICGoogle} />
          <MyButton
            text="Facebook"
            imgUrl={ICFacebook}
            style={{ marginLeft: 30 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle: {
    fontSize: 32,
    marginTop: 150,
    fontWeight: "bold",
    textAlign: "center",
  },
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold", 
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20
  },
});
