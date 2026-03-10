
import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AppButton from "../../components/AppButton";
import styles from "./CreateStudentStyles";
import { StudentContext } from "../../providers/StudentContext";
import { users } from "../../data/mockData";

export default function CreateStudent({ navigation }: any) {

  const { students, setStudents } = useContext(StudentContext);

  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const [mentorId, setMentorId] = useState<number | null>(null);
  const [showMentors, setShowMentors] = useState(false);

  const mentors = users.filter(u => u.role === "mentor");

  const handleCreate = () => {

    const newStudent = {
      id: Date.now(),
      name,
      class: studentClass,
      email,
      password,
      dob,
      mentorId
    };

    setStudents([...students, newStudent]);

    navigation.goBack();
  };

  const selectedMentor = mentors.find(m => m.userId === mentorId);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create Student</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        onChangeText={setName}
      />

      <Text style={styles.label}>Class</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter class"
        onChangeText={setStudentClass}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
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

      {/* Mentor Dropdown */}

      <Text style={styles.label}>Assign Mentor</Text>

      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowMentors(!showMentors)}
      >
        <Text>
          {selectedMentor ? selectedMentor.name : "Select Mentor"}
        </Text>
      </TouchableOpacity>

      {showMentors && mentors.map((m) => (
        <TouchableOpacity
          key={m.userId}
          style={{
            padding: 10,
            borderBottomWidth: 1,
            borderColor: "#ddd"
          }}
          onPress={() => {
            setMentorId(m.userId);
            setShowMentors(false);
          }}
        >
          <Text>{m.name}</Text>
        </TouchableOpacity>
      ))}

      <AppButton
        title="Create Student"
        onPress={handleCreate}
      />

    </View>
  );
}