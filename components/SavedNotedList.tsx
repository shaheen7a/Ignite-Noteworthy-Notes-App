import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { getAllNotes, Note } from "../services/noteStoreService";

export const SavedNotesList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>();

  useFocusEffect(() => {
    getAllNotes().then((result) => setNotes(result.notes));
  });

  return (
    <View style={styles.noteContainer}>
      <ScrollView>
        {notes?.map((note) => (
          <Pressable key={note.id}>
            <View style={styles.row}>
              <Text style={styles.note} key={note.id}>
                {note.text.length === 0 ? "(Blank Note)" : note.text}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    paddingVertical: 20,
    width: "100%",
    fontSize: 16,
  },
  row: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
  noteContainer: {
    width: "100%",
    flex: 1,
    height: 80,
  },
});
