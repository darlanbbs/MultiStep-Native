import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "./../../Context/UseContext";
const Stepbar = () => {
  const number = new Number();
  const { state } = useForm();
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={styles.StepBar}
        source={require("../../../public/bg-sidebar-mobile.png")}
      >
        <View style={styles.Circles}>
          <TouchableOpacity
            style={[
              styles.Circle,
              {
                backgroundColor:
                  state.currentStep === 1 ? "#fff" : "transparent",
              },
            ]}
            onPress={() => navigation.navigate("Infos")}
          >
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Circle,
              {
                backgroundColor:
                  state.currentStep === 2 ? "#fff" : "transparent",
              },
            ]}
            onPress={() => navigation.navigate("Type")}
          >
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Circle,
              {
                backgroundColor:
                  state.currentStep === 3 ? "#fff" : "transparent",
              },
            ]}
            onPress={() => navigation.navigate("Addons")}
          >
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.Circle,
              {
                backgroundColor:
                  state.currentStep === 4 ? "#fff" : "transparent",
              },
            ]}
            onPress={() => navigation.navigate("Summary")}
          >
            <Text>4</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Stepbar;
