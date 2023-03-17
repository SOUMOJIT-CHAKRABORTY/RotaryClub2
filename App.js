import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Profile from "./Events";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Drawer/DrawerNavigator";
import LoginScreen from "./LoginScreen";
import TransactionHistory from "./Transaction";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerTitleAlign: "center",
          }}
          component={Home}
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="DrawerNavigator"
          options={{ headerShown: false }}
          component={DrawerNavigator}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Transaction"
          options={{ headerShown: false }}
          component={TransactionHistory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
