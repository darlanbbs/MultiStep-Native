import { View, StyleSheet, Text } from "react-native";
import React from "react";
import style from "./style";

type Props = {
  children: React.ReactNode;
  isChecked: boolean;
};

function Switch({ children, isChecked }: Props) {
  return (
    <View style={style(isChecked).SwitchArea}>
      <Text style={style(isChecked).MontlyorYearly}>Montly</Text>
      {children}
      <Text style={style(!isChecked).MontlyorYearly}>Yearly</Text>
    </View>
  );
}

export default Switch;
