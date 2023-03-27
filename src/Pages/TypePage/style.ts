import { StyleSheet } from "react-native";

const styles = (isChecked: any) =>
  StyleSheet.create({
    Container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "#ccc",
    },
    TypeArea: {
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
    Cards: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    Card: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",

      width: "100%",
      height: 60,
      borderColor: "#000",
      borderRadius: 10,
      borderWidth: 1,
    },
    CardItems: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    },
    CardItemsText: {
      flexDirection: "row",
      gap: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      textAlign: "flex-start",
    },
    CardItemTitle: {
      color: "#03295a",
      fontWeight: "bold",
      fontSize: 14,
    },
    CardItemText: {
      color: "#000000",
      fontWeight: "600",
      fontSize: 12,
    },
    CardItemYearly: {
      color: "#03295a",
      fontWeight: "400",
      fontSize: 15,
    },
    SwitchArea: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      backgroundColor: "rgba(136, 139, 155, 0.2);",
      flexDirection: "row",
    },
    MontlyorYearly: {
      color: !isChecked ? "#03295a" : "#999f",
      fontWeight: "bold",
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
  });

export default styles;
