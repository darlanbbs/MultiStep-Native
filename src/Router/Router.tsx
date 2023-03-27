import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stepbar from "../components/StepBars/StepBar";

//pages
import FormPage from "./../Pages/HomePage/FormPage";
import Typepage from "./../Pages/TypePage/Typepage";
import Addons from "./../Pages/AddonsPage/Addons";
import Summary from "../Pages/SummaryPage/Summary";
import Finish from "../Pages/FinishPage/Finish";

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Infos"
          component={FormPage}
          options={{
            header: () => <Stepbar />,
          }}
        />
        <Stack.Screen
          name="Type"
          component={Typepage}
          options={{
            header: () => <Stepbar />,
          }}
        />
        <Stack.Screen
          name="Addons"
          component={Addons}
          options={{
            header: () => <Stepbar />,
          }}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={{
            header: () => <Stepbar />,
          }}
        />
        <Stack.Screen
          name="Finish"
          component={Finish}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
