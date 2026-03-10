import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../../components/CardStyles";
import { StudentContext } from "../../providers/StudentContext";

export default function MentorStudents({ route, navigation }: any) {

  const { students } = useContext(StudentContext);
  const { mentor } = route.params;

  const mentorStudents = students.filter(
    (student: any) => student.mentorId === mentor.userId
  );

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        {mentor.name}'s Students
      </Text>

      <FlatList
        data={mentorStudents}
        keyExtractor={(item: any) => item.id.toString()}

        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            No students assigned
          </Text>
        }

        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("LessonsList", { student: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={{ color: "gray" }}>
              Class: {item.class}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}