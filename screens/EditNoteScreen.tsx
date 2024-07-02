import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import NoteTakingInput from "../components/NoteTakingInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { RootStackParamList, ScreenNavigationStackProp } from "../App";
// import { DeleteNote } from "../components/DeleteNote";

export const EditNoteScreen: React.FC = () => {
  const saveNote = async (text: string) => {
    await AsyncStorage.setItem("note", text);
  };

  return <NoteTakingInput saveNote={saveNote} />;
};
