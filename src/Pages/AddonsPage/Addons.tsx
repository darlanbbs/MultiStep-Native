import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useForm, formActions } from "./../../Context/UseContext";
import Title from "../GlobalItens/Title";
import Card from "./Card";

import styles from "./style";

const Addons = ({ navigation }: any) => {
  const { state, formData, dispatch } = useForm();

  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (formData != undefined) {
      navigation.addListener("focus", () => setLoad(!load));
      dispatch({
        type: formActions.setCurrentStep,
        payload: 3,
      });
    } else {
      navigation.navigate("Infos");
    }
  }, [load, navigation]);

  const price1 = state.type === "Yearly" ? "$10/yr" : "$01/mo";
  const price2 = state.type === "Yearly" ? "$20/yr" : "$02/mo";
  return (
    <View style={styles.Container}>
      <View style={styles.AddonsArea}>
        <Title
          title="Pick add-ons"
          subTitle="Add-ons help enhance your gaming experience."
        />
        <Card price1={price1} price2={price2} navigation={navigation} />
      </View>
    </View>
  );
};

export default Addons;
