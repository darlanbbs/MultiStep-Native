import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type Props = {
  title: string;
  subTitle: string;
};

export default function Title({ title, subTitle }: Props) {
  return (
    <View style={styles.titleArea}>
      <Text style={styles.Title}>{title}</Text>
      <Text style={styles.SubTitle}>{subTitle}</Text>
    </View>
  );
}
