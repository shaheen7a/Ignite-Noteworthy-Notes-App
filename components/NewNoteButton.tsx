import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types";

export const NewNoteButton: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp>();

  return (
    <Pressable
      onPress={() => navigation.navigate("EditNote", { noteId: undefined })}
    >
      <FontAwesome name="pencil-square-o" size={30} color="#ffb703" />
    </Pressable>
  );
};
