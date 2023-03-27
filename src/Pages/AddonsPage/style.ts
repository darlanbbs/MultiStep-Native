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
  AddonsArea: {
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
    gap: 20,
  },
  allCards: {
    width: "100%",
    display: "flex",
    gap: 20,
  },
  CheckArea: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
    borderWidtz: 2,
    width: "95%",
  },
  bothSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    width: "95%",
    gap: 15,
    borderColor: "#03295a",
    borderWidth: 1,
    padding: 5,
  },
  titleArea: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 15,
    flexDirection: "column",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  leftSide: {
    display: "flex",
  },
  title: {
    fontWeight: "bold",
    margin: 0,
    color: "#03295a",
    fontSize: 15,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    margin: 0,
    color: "#999",
  },
  price: {
    color: "#03295a",
    fontWeight: "600",
  },
  checkbox: {
    width: 25,
    height: 25,
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
  Checkbox: {
    padding: 20,
    margin: 8,
  },
});