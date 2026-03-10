import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { lessons } from "../../data/mockData";
import styles from "../../components/CardStyles";

export default function StudentDashboard({ navigation }: any) {

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 20 }}>Lessons</Text>

      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("SessionsList", { lesson: item })}
          >
            <Text style={styles.name}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}