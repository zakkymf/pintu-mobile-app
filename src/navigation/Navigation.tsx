import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tab";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
