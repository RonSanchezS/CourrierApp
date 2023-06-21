import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Components/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Components/Register';
import Home from './Components/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
