import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import axios from 'axios';

const Login = ({navigation}) => {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const login = () => {
        axios.post('http://104.131.165.40/api/choferes/login', {
            email: Email,
            password: Password
            }).then((response) => {
                console.log(response);
                if(response.data.res == "error"){
                    alert("Error en el login, "+response.data.message)
                }else{
                    alert("Login exitoso")
                    navigation.navigate('Home')
                }
            }, (error) => {
                console.log(error);
            });
    }


  return (
    <View>
        <Text>Login</Text>
        <TextInput placeholder='Email' value={Email} onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <TextInput placeholder='Password' value={Password} onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        <Button title='Login'onPress={()=>{
            console.log('Login')
            console.log(Email)
            console.log(Password)
            login();
        }}/>
        <Button title='Register' onPress={()=>{
            navigation.navigate('Register')
        }}/>
    </View>
  )
}

export default Login