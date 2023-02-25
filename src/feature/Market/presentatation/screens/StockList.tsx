import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useInterval } from "../../../../shared/hooks/useInterval";
import { ListProps } from "../../domain/Market.entities";
import { useMarket } from "../../hooks/useMarket";
import List from "../components/List";

const StockList = () => {
  const { data, price, getStockMarket, getPrice } = useMarket();

  useEffect(() => {
    getStockMarket();
  }, []);

  useInterval(() => {
    getPrice();
  }, 1000);

  const renderItem = ({ item }: { item: ListProps }) => {
    return <List item={item} price={price} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      windowSize={30}
      initialNumToRender={20}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={60}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

export default StockList;
