import { View, Text } from "react-native";
import React from "react";
import styles from "./header.style";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market</Text>
      <View style={styles.row}>
        <Text>Bintang</Text>
        <Text>Search</Text>
      </View>
    </View>
  );
};

export default Header;
