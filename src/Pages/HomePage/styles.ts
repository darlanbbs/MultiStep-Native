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
  InputArea: {
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
    gap: 10,
  },
  Input: {
    padding: 10,
    width: "100%",
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  Labels: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  Label: {
    color: "#483eff",
  },
  ErrorText: {
    color: "red",
    fontWeight: "bold",
  },
  ButtonArea: {
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    marginTop: 10,
  },
  NextStep: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#03295a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  TextButton: {
    color: "#FFF",
    fontStyle: "normal",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
