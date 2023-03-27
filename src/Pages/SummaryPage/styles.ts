import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
  },
  SummaryArea: {
    width: "90%",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: 5,
  },
  Result: {
    width: "100%",
    height: "55%",
    backgroundColor: "rgba(136, 139, 155, 0.2)",
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 5,
  },
  finalAreaItens: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
  },
  AllCards: {
    width: "100%",
    height: "55%",
    display: "flex",
    gap: 15,
  },
  ChangeArea: {
    display: "flex",
    flexDirection: "column",
  },
  firstItem: {
    color: "#03295a",
    fontWeight: "700",
  },
  Itens: {
    color: "#999f",
    fontWeight: "500",
    fontSize: 15,
  },
  hr: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#999f",
    width: "96%",
    height: 1,
  },
  resultArea: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceResult: {
    fontWeight: "bold",
    color: "#03295a",
  },
  ButtonsArea: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  Button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#03295a",
  },
  InsideButton: {
    color: "#fff",
    fontWeight: "400",
  },
  changeText: {
    color: "blue",
  },
});
