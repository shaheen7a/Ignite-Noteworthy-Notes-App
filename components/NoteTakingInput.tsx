import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { getNote, saveNote } from "../services/noteStoreService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types";
import { SaveNote } from "./SaveNote";

type Props = {
  noteId: string | undefined;
};

const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState<string>("");

  const navigation = useNavigation<StackNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (noteId ? <SaveNote text={text} id={noteId} /> : <></>),
    });
  }, [navigation, text, noteId]);

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);
  // <Button title="Save note" onPress={saveNoteHandler} />

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.noteInput}
        value={text}
        onChangeText={setText}
        autoFocus={true}
      />
    </>
  );
};

const styles = StyleSheet.create({
  noteInput: {
    fontSize: 16,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ffb70342",
  },
});

export default NoteTakingInput;
