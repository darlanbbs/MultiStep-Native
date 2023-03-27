import React, { useEffect, useState } from "react";
import { useForm, formActions } from "./../../Context/UseContext";
import { Switch as SwitchH, TouchableOpacity, View, Text } from "react-native";

import Switch from "./Switch";
import Title from "../GlobalItens/Title";
import Card from "./Card";
import styles from "./style";

const TypePage = ({ navigation }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const { dispatch, state, formData } = useForm();

  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (formData != undefined) {
      navigation.addListener("focus", () => setLoad(!load));
      dispatch({
        type: formActions.setCurrentStep,
        payload: 2,
      });
    } else {
      navigation.navigate("Infos");
    }
  }, [load, navigation]);

  useEffect(() => {
    if (isChecked) {
      setType("Yearly");
    } else {
      setType("Monthly");
    }
  }, [isChecked]);

  const setPrice = (price: string) => {
    dispatch({ type: formActions.setPrice, payload: price });
  };

  const setPlan = (plan: string) => {
    dispatch({ type: formActions.setPlan, payload: plan });
  };

  const setType = (type: string) => {
    dispatch({ type: formActions.setType, payload: type });
  };
  const toggleSwitch = () => {
    setIsChecked((previousState) => !previousState);
  };

  const price1 = state.type === "Yearly" ? "$90/yr" : "$09/mo";
  const price2 = state.type === "Yearly" ? "$120/yr" : "$12/mo";
  const price3 = state.type === "Yearly" ? "$150/yr" : "$15/mo";
  return (
    <View style={styles(isChecked).Container}>
      <View style={styles(isChecked).TypeArea}>
        <Title
          title="Select your plan"
          subTitle="You have the option of monthly or yearly billing."
        />
        <Card
          selected={state.plan === "Advanced"}
          title="Advanced"
          price={price1}
          img={require("./../../../public/icon-advanced.png")}
          alt={"Advanced"}
          isChecked={isChecked}
          onClick={() => {
            setPrice(price1);
            setPlan("Advanced");
          }}
        />
        <Card
          selected={state.plan === "Arcade"}
          title="Arcade"
          price={price2}
          img={require("./../../../public/icon-arcade.png")}
          alt={"arcade"}
          isChecked={isChecked}
          onClick={() => {
            setPrice(price2);
            setPlan("Arcade");
          }}
        />
        <Card
          selected={state.plan === "Pro"}
          title="Pro"
          price={price3}
          img={require("./../../../public/icon-pro.png")}
          alt={"Pro"}
          isChecked={isChecked}
          onClick={() => {
            setPrice(price1);
            setPlan("Pro");
          }}
        />
        <Switch isChecked={isChecked}>
          <SwitchH onValueChange={toggleSwitch} value={isChecked} />
        </Switch>
        <View style={styles(isChecked).ButtonsArea}>
          <TouchableOpacity style={styles(isChecked).Button}>
            <Text
              style={styles(isChecked).InsideButton}
              onPress={() => navigation.navigate("Infos")}
            >
              Go Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles(isChecked).Button}>
            <Text
              style={styles(isChecked).InsideButton}
              onPress={() => navigation.navigate("Addons")}
            >
              Go Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TypePage;
