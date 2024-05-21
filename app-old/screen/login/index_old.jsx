import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePass] = React.useState('')
  const logo = require("../../../assets/images/Subtract.png")
  const logo2 = require("../../../assets/images/Brand.png")

  const onSubmitLogin = () => {
    if (email == 'Dwi' && password == '123') {
      alert('Sudah Benar')
    } else {
      alert("Salah")
    }
  }

  return (
    <View style={style.container}>
      <Image source={logo2}></Image>
      <Image source={logo}></Image>
      <TextInput style={style.textInputStyle} onChangeText={onChangeEmail} placeholder='Email or Username' placeholderTextColor='red' value={email}/>
      <TextInput style={style.textInputStyle} onChangeText={onChangePass} placeholder='Password' placeholderTextColor='green'  value={password}/>
      <Button
        title="Go to Home"
        onPress={() => onSubmitLogin() }
      />
    </View>
  );
}

const style = StyleSheet.create({
  textInputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  img: {
    position: "center"
  }
})