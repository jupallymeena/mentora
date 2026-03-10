
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,

    elevation: 3
  },

  name: {
    fontSize: 16,
    fontWeight: "bold"
  },

  dob: {
    marginTop: 4,
    color: "#555"
  }
});