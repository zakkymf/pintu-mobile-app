import { useState } from "react";
import axios from "../../../shared/libraries/httpClient";

export function useMarket() {
  const [data, setData] = useState<any>([]);
  const [price, setPrice] = useState([]);

  const getStockMarket = () => {
    axios
      .get("/wallet/supportedCurrencies")
      .then((res) => {
        const filteredData = res?.data?.payload?.filter(
          (item: any) =>
            item?.name?.toLowerCase() !== "Rupiah Token".toLowerCase()
        );
        setData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPrice = () => {
    axios
      .get("/trade/price-changes")
      .then((res) => {
        setPrice(res?.data?.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    data,
    price,
    getStockMarket,
    getPrice,
  };
}
