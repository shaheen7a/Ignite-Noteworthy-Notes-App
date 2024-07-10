import React from "react";
import { SavedNotesList } from "../components/SavedNotedList";
import { StyleSheet } from "react-native";

export const HomeScreen: React.FC = () => {
  return (
    <>
      <SavedNotesList style={styles.home} />
    </>
  );
};


const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#fff",
  },
});