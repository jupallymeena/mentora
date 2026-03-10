
import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../../components/CardStyles";
import { StudentContext } from "../../providers/StudentContext";

export default function MentorDashboard({ navigation }: any) {

  const { students } = useContext(StudentContext);

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        My Students
      </Text>

      <FlatList
        data={students}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("LessonsList")}
          >
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}