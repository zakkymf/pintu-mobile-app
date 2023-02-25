import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Sort = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sort By</Text>
      <View style={styles.row}>
        <Text style={styles.text}>Default</Text>
        <Ionicons name="chevron-down-outline" size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Sort;
