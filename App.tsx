import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import NoteTakingInput from "./components/NoteTakingInput";
import { useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [shouldCreateNewNote, setShouldCreateNewNote] =
    useState<Boolean>(false);
  const saveNote = async (text: string) => {
    await AsyncStorage.setItem("note", text);
    setShouldCreateNewNote(false);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="New Note" component={NoteTakingInput} />
      </Stack.Navigator>
      <View style={styles.container}>
        {shouldCreateNewNote ? (
          <NoteTakingInput saveNote={saveNote} />
        ) : (
          <HomeScreen toggleNewNote={setShouldCreateNewNote} />
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
