import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types";
import { Note, getAllNotes, getNote } from "../services/noteStoreService";
type Props = {
  toggleNewNote: (toggle: boolean) => void;
};
export const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<StackNavigationProp>();
  const [notes, setNotes] = useState<Note[]>();

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <>
      <View>
        {notes?.map((note) => (
          <Text key={note.id}>{note.text}</Text>
        ))}
      </View>
      <Button
        onPress={() => navigation.navigate("EditNote")}
        title="New Note"
      />
    </>
  );
};
