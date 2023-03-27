import { StyleSheet } from "react-native";

export default StyleSheet.create({
  StepBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 135,
  },
  Circles: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#000",
    flexDirection: "row",
  },
  Circle: {
    display: "flex",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 100,
    borderColor: "#000",
    borderWidth: 1,
  },
});
