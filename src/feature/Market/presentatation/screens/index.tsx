import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./market.styles";
import Header from "../components/Header";
import Filter from "../components/Filter";

const Market = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Filter />
    </View>
  );
};

export default Market;
