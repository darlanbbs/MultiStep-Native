import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Title from "../GlobalItens/Title";
import Card from "./Card";
import styles from "./styles";
import { formActions, useForm } from "./../../Context/UseContext";

const Summary = ({ navigation }: any) => {
  const { dispatch, state, formData } = useForm();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (formData != undefined) {
      navigation.addListener("focus", () => setLoad(!load));
      dispatch({
        type: formActions.setCurrentStep,
        payload: 4,
      });
    } else {
      navigation.navigate("Infos");
    }
  }, [load, navigation]);

  return (
    <View style={styles.Container}>
      <View style={styles.SummaryArea}>
        <Title
          title="Finishing up"
          subTitle="Double-check everything looks OK before confirming."
        />

        <Card
          title={state.plan}
          type={state.type}
          price={state.price}
          navigation={navigation}
        />
        <View style={styles.ButtonsArea}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => navigation.navigate("Addons")}
          >
            <Text style={styles.InsideButton}>Go Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={styles.InsideButton}
              onPress={() => navigation.navigate("Finish")}
            >
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Summary;
