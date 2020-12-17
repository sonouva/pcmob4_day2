import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotesScreen from "./NotesScreen";

const InnerStack = createStackNavigator();
export default function NotesStack() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          title: "To do list",
          headerStyle: {
            backgroundColor: "lightyellow",
            height: 100,
            shadowColor: "black",
            shadowOpacity: 0.5,
            shadowRadius: 5,
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
        }}
      />
    </InnerStack.Navigator>
  );
}
