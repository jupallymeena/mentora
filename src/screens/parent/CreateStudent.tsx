
import React, { useState, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import AppButton from "../../components/AppButton";
import styles from "./CreateStudentStyles";
import { StudentContext } from "../../providers/StudentContext";

export default function CreateStudent({ navigation }: any) {

  const { students, setStudents } = useContext(StudentContext);

  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const handleCreate = () => {

    const newStudent = {
      id: Date.now(),
      name,
      class: studentClass,
      email,
      password,
      dob
    };

    setStudents([...students, newStudent]);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create Student</Text>

      <Text style={styles.label}>Name / Surname</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter student name"
        onChangeText={setName}
      />

      <Text style={styles.label}>Class</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter class (e.g., 5th)"
        onChangeText={setStudentClass}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        onChangeText={setDob}
      />

      <AppButton
        title="Create Student"
        onPress={handleCreate}
      />

    </View>
  );
}