
import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../../components/CardStyles";
import AppButton from "../../components/AppButton";
import { StudentContext } from "../../providers/StudentContext";

export default function ParentDashboard({ navigation }: any) {

  const { students } = useContext(StudentContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text>Loading students...</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        My Students
      </Text>

      <FlatList
        data={students}
        keyExtractor={(item: any) => item.id.toString()}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 40 }}>
            No students available
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("LessonsList", { student: item })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.dob}>Class: {item.class || "N/A"}</Text>
          </TouchableOpacity>
        )}
      />

      <AppButton
        title="Create Student"
        onPress={() => navigation.navigate("CreateStudent")}
      />

    </View>
  );
}