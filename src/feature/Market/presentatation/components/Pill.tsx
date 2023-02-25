import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./pill.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PillProps } from "../../domain/Market.entities";

const Pill: React.FC<any> = ({ name, logo }: PillProps) => {
  return (
    <Pressable style={styles.container}>
      <Ionicons name={logo} size={14} style={styles.icon} />
      <Text>{name}</Text>
    </Pressable>
  );
};

export default Pill;
