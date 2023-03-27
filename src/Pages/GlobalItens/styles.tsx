import { StyleSheet } from "react-native";

export default StyleSheet.create({
  titleArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "start",
    height: "30%",
    width: "100%",
    flexDirection: "column",
    margin: 8,
  },
  StepBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100px",
  },
  Circles: {
    display: "flex",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    color: "#000",
  },
  Circle: {
    height: "50px",
    width: "50px",
    borderRadius: 100,
    borderColor: "#fff",
  },
  Title: {
    color: "#03295a",
    fontSize: 28,
    fontWeight: "bold",
  },
  SubTitle: {
    color: "#ccc",
    fontSize: 13,
    fontWeight: "400",
  },
});
