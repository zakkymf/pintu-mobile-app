import { View, FlatList } from "react-native";
import React from "react";
import { filterData } from "../../../../shared/util";
import Pill from "./Pill";
import styles from "./filter.style";

const Filter = () => {
  const renderItem = ({ item }: any) => {
    return <Pill name={item?.name} logo="" />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={filterData}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Filter;
