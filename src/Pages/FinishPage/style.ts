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
  FinishArea: {
    width: "90%",
    height: "60%",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 50,
  },
  FinalText: {
    color: "#03295a",
    fontWeight: "bold",
    fontSize: 15,
  },
});
