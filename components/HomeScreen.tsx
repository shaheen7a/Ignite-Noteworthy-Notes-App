import { View, Text, Button } from "react-native";
import React from "react";

type Props = {
  toggleNewNote: (toggle: boolean) => void;
};
export const HomeScreen: React.FC<Props> = ({ toggleNewNote }) => {
  return (
    <>
      <Text>Home Screen</Text>
      <Button onPress={() => toggleNewNote(true)} title="New Note" />
    </>
  );
};
