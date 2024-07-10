import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import NoteTakingInput from "../components/NoteTakingInput";
import { EditScreenRouterProp, StackNavigationProp } from "../types";
import { DeleteNote } from "../components/DeleteNote";

export const EditNoteScreen: React.FC = () => {
  const route = useRoute<EditScreenRouterProp>();
  const navigation = useNavigation<StackNavigationProp>();
  const noteId = route.params?.noteId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: noteId ? "Edit Note" : "New Note",
      headerRight: () => noteId ? (<DeleteNote noteId={noteId} />): <></>,
    });
  }, [navigation]);
  return <NoteTakingInput noteId={noteId} />;
};
