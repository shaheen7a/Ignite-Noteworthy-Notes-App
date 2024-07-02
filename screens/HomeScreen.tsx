import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  toggleNewNote: (toggle: boolean) => void;
};
export const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation<StackNavigationProp>();
  const [noteText, setNoteText] = useState<string>("");

  useFocusEffect(() => {
    getNote().then((result) => setNoteText(result ?? ""));
  });

  const getNote = async () => {
    return await AsyncStorage.getItem("note");
  };
  return (
    <>
      <View>
        <Text>{noteText}</Text>
      </View>
      <Button
        onPress={() => navigation.navigate("EditNote")}
        title="New Note"
      />
    </>
  );
};
