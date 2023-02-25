import React from "react";
import { View, Text } from "react-native";
import { SvgUri } from "react-native-svg";
import { ListProps } from "../../domain/Market.entities";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./list.style";
import { formatCurrency } from "../../../../shared/utility/utils";

const List = ({ item, price }: { item: ListProps; price: any }) => {
  const filteredData = price?.filter((data: any) => {
    const newStr = data?.pair?.split("/");
    return newStr[0].toLowerCase() === item?.currencySymbol.toLowerCase();
  });
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <SvgUri color={item?.color} width={24} height={24} uri={item?.logo} />
        <View style={styles.col}>
          <Text>{item?.name}</Text>
          <Text>{item?.currencyGroup}</Text>
        </View>
      </View>
      <View>
        {filteredData.map((data: any) => {
          const isMinus = data?.day?.includes("-");
          return (
            <View>
              <Text style={styles.price}>
                {formatCurrency(data?.latestPrice)}
              </Text>
              <View style={styles.row}>
                <Ionicons
                  name={isMinus ? "caret-down-outline" : "caret-up-outline"}
                  size={12}
                  color={isMinus ? "red" : "green"}
                />
                <Text style={styles.status}>{data?.day}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default React.memo(List);
