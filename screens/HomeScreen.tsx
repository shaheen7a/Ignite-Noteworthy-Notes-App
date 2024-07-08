import { Button, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types";
import { SavedNotesList } from "../components/SavedNotedList";

export const HomeScreen: React.FC = () => {
  

  return (
    <>
      <SavedNotesList />
      
    </>
  );
};
