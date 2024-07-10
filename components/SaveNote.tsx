import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Note, saveNote } from "../services/noteStoreService";
import { StackNavigationProp } from "../types";

export const SaveNote: React.FC<Note> = ({ text, id }) => {
  const navigation = useNavigation<StackNavigationProp>();

  const saveNoteAndNavigateHome = async () => {
    await saveNote(text, id);
    navigation.navigate("Home");
  };

  return (
    <Pressable onPress={saveNoteAndNavigateHome}>
      <Ionicons name="chevron-back" size={30} color="#ffb703" />
    </Pressable>
  );
};