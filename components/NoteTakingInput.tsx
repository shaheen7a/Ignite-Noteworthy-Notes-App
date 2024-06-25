import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

type Props = {
  saveNote: (text: string) => void;
};

const NoteTakingInput: React.FC<Props> = ({ saveNote }) => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <TextInput
        multiline={true}
        style={styles.textInput}
        value={text}
        onChangeText={setText}
      />
      <Button title="Save note" onPress={() => saveNote(text)} />
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
