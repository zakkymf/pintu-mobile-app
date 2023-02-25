import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../feature/Account/presentatation/screens";
import Discover from "../feature/Discover/presentatation/screens";
import Home from "../feature/Home/presentatation/screens";
import Market from "../feature/Market/presentatation/screens";
import Wallet from "../feature/Wallet/presentatation/screens";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="home-outline" size={20} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="book-outline" size={20} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="stats-chart-outline" size={20} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="wallet-outline" size={20} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="person-outline" size={20} color={tintColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
