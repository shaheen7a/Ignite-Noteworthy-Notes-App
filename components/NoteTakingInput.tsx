import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { getNote, saveNote } from "../services/noteStoreService";

type Props = {
  noteId: string | undefined;
};

const NoteTakingInput: React.FC<Props> = ({ noteId }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (noteId) {
      getNote(noteId).then((result) => setText(result?.text ?? ""));
    }
  }, []);

  const saveNoteHandler = () => {
    saveNote(text, noteId);
  };

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        autoFocus={true}
      />
      <Button title="Save note" onPress={saveNoteHandler} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#ffb70342",
    width: "100%",
    height: 200,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
});

export default NoteTakingInput;
