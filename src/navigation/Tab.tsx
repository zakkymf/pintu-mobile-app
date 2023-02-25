import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../feature/Account/presentatation/screens";
import Discover from "../feature/Discover/presentatation/screens";
import Home from "../feature/Home/presentatation/screens";
import Market from "../feature/Market/presentatation/screens";
import Wallet from "../feature/Wallet/presentatation/screens";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
