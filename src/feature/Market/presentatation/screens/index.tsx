import React from "react";
import { View } from "react-native";
import styles from "./market.styles";
import Header from "../components/Header";
import Filter from "../components/Filter";
import StockList from "./StockList";
import Sort from "../components/Sort";

const Market: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Filter />
      <Sort />
      <StockList />
    </View>
  );
};

export default Market;
