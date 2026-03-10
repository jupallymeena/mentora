import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { sessions } from "../../data/mockData";
import styles from "../../components/CardStyles";

export default function SessionsList({ route, navigation }: any) {

  const { lesson } = route.params;

  const filteredSessions = sessions.filter(
    (session) => session.lessonId === lesson.id
  );

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Sessions for {lesson.title}
      </Text>

      <FlatList
        data={filteredSessions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("SessionDetail", { session: item })
            }
          >
            <Text style={styles.name}>{item.topic}</Text>
            <Text style={styles.dob}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}