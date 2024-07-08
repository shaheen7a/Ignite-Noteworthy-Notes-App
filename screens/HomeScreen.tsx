import { Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types";
import { SavedNotesList } from "../components/SavedNotedList";

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <>
      <SavedNotesList />
      <Button
        onPress={() => navigation.navigate("EditNote")}
        title="New Note"
      />
    </>
  );
};
