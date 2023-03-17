import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";
import Events from "../Events";
import Icon from "react-native-vector-icons/FontAwesome";
import PayMembership from "../Payments";
import Donate from "../Donate";
import HelpDesk from "../HelpDesk";
import About from "../About";
import TransactionHistory from "../Transaction";
// import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      <Drawer.Screen
        name={`Home `}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={Home}
      />
      <Drawer.Screen
        name={`Transaction `}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={TransactionHistory}
      />
      <Drawer.Screen
        name={`Pay Membership`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={PayMembership}
      />
      <Drawer.Screen
        name={`Donate`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={Donate}
      />
      <Drawer.Screen
        name="Events"
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={Events}
      />

      <Drawer.Screen
        name={`Help Desk`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={HelpDesk}
      />
      <Drawer.Screen
        name={`About`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={About}
      />
    </Drawer.Navigator>
  );
}
