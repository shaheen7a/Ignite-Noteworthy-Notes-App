import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import NoteTakingInput from "./components/NoteTakingInput";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditNoteScreen } from "./screens/EditNoteScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { RootStackParamList } from "./types";
import { NewNoteButton } from "./components/NewNoteButton";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#333333", // Set your header background color here
          },
          headerTintColor: "#FFFFFF", // Set your header text color
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold", // Customize your header text style if needed
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "All notes",
            headerRight: () => <NewNoteButton />,
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
