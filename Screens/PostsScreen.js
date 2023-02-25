import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function PostsScreen({ route }) {
  console.log("route.params", route.params);
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
