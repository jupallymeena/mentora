
import React from "react";
import { View, Text } from "react-native";
import styles from "../../components/CardStyles";

export default function SessionDetail({ route }: any) {

  const { session } = route.params;

  return (
    <View style={{ padding: 20 }}>

      <View style={styles.card}>

        <Text style={styles.name}>
          {session.topic}
        </Text>

        <Text style={styles.dob}>
          Date: {session.date}
        </Text>

        <Text style={{ marginTop: 10 }}>
          {session.summary}
        </Text>

      </View>

    </View>
  );
}