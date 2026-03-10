import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
import { users } from "../data/mockData";
import AppButton from "../components/AppButton";

export default function LoginScreen({ navigation }: any) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    if (user.role === "parent") {
      navigation.navigate("ParentDashboard");
    }

    if (user.role === "student") {
      navigation.navigate("StudentDashboard");
    }

    if (user.role === "mentor") {
      navigation.navigate("MentorDashboard", { user });
    }
  };

  return (
  <View style={styles.container}>

    <TextInput
      style={styles.input}
      placeholder="Enter Email"
      onChangeText={setEmail}
    />

    <TextInput
      style={styles.input}
      placeholder="Enter Password"
      secureTextEntry
      onChangeText={setPassword}
    />

    <AppButton title="Login" onPress={handleLogin} />

    <Text style={styles.forgot}>Forgot Password?</Text>

  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",  
    alignItems: "center",      
    padding: 20,
    backgroundColor: "#f5f5f5"
  },

  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: "bold"
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff"
  },

  forgot: {
    marginTop: 15,
    color: "blue"
  }
});