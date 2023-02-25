import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
    justifyContent: "space-between",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
  },
  col: {
    marginLeft: 10,
    flexDirection: "column",
  },
  price: {
    marginTop: 2,
    textAlign: "right",
  },
  status: {
    marginLeft: 5,
    textAlign: "right",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default styles;
