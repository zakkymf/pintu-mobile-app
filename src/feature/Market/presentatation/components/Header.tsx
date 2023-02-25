import { View, Text } from "react-native";
import React from "react";
import styles from "./header.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market</Text>
      <View style={styles.row}>
        <Feather name="star" size={24} style={styles.star} />
        <Ionicons name="search" size={24} />
      </View>
    </View>
  );
};

export default Header;
