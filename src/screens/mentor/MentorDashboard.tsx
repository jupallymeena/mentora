
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "../../components/CardStyles";
import { users } from "../../data/mockData";

export default function MentorDashboard({ navigation }: any) {

  const mentors = users.filter((u) => u.role === "mentor");

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
        Mentors
      </Text>

      <FlatList
        data={mentors}
        keyExtractor={(item: any) => item.userId.toString()}

        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("MentorStudents", { mentor: item })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={{ color: "gray" }}>{item.email}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}