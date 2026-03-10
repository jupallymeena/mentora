import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AppButton({ title, onPress }: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#486bdd",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});