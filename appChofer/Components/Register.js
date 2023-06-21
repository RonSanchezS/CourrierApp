import axios from "axios";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from 'react-native'

const Register = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const register = () => {
    axios.post('http://104.131.165.40/api/choferes/register', {
        email: Email,
        password: Password,
        nombreCompleto : Username
        }).then((response) => {
            console.log(response);
            if(response.data.res == "error"){
                alert("Error en el registro, "+response.data.message)
            }else{
                alert("Registro exitoso")
                navigation.navigate('Login')
            }
        }, (error) => {
            console.log(error);
        });
}
  return (
    <View>
      <Text>Register</Text>
      <TextInput
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextInput
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextInput
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        title="Register"
        onPress={() => {
          register();
        }}
      />
    </View>
  );
};

export default Register;
