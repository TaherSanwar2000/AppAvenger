import { createStackNavigator } from '@react-navigation/stack';
import Login from '../src/Login';
import Home from '../src/Home';
import Create from '../src/Create';
import History from '../src/History';
import Notification from '../src/Notification';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Create" component={Create} options={{headerShown:false}} />
      <Stack.Screen name="History" component={History} options={{headerTitleAlign:'center'}} />
      <Stack.Screen name="Notification" component={Notification}  options={{headerTitleAlign:'center'}}  />

      
    </Stack.Navigator>
  );
}
export default MyStack;