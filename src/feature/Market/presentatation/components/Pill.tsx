import { Text, Pressable } from "react-native";
import React from "react";
import styles from "./pill.style";
import { PillProps } from "../../domain/Market.entities";

const Pill: React.FC<any> = ({ name, logo }: PillProps) => {
  return (
    <Pressable style={styles.container}>
      <Text>{name}</Text>
    </Pressable>
  );
};

export default Pill;
