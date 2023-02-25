import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";
import Tabs from "./Tab";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Tabs}
        options={{
          headerShown: false,
          headerStyle: { marginTop: Constants.statusBarHeight },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
