import React, { useEffect, useState } from "react";
import { useForm } from "./../../Context/UseContext";
import { useForm as useFormRHF, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkBoxSchema } from "../GlobalItens/schema";

import styles from "./style";
import { View, TouchableOpacity, Text, Alert } from "react-native";

import { Checkbox } from "expo-checkbox";

interface Props {
  price1: string;
  price2: string;
  navigation: any;
}

interface checkBoxData {
  Option1: boolean;
  Option2: boolean;
  Option3: boolean;
}

interface CheckboxState {
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
}

const Card = ({ price1, price2, navigation }: Props) => {
  const { setFormData, formData } = useForm();
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  useEffect(() => {
    if (formData != undefined) {
      setFormData((prevItens: any) => {
        return {
          ...prevItens,
          isChecked,
        };
      });
    }
  }, [isChecked]);

  const { handleSubmit, control } = useFormRHF<checkBoxData>({
    resolver: yupResolver(checkBoxSchema),
  });

  const handleCheckboxChange =
    (name: keyof CheckboxState) => (value: boolean) => {
      setIsChecked({ ...isChecked, [name]: value });
    };

  function onSubmit(data: checkBoxData) {
    navigation.navigate("Summary");
    setFormData((prevItens: any) => {
      return {
        ...prevItens,
        data,
      };
    });
  }
  const confirmChoose = (data: any) => {
    if (
      isChecked.checkbox1 === false &&
      isChecked.checkbox2 === false &&
      isChecked.checkbox3 === false
    ) {
      Alert.alert("You sure?", "you didn't choose any option!", [
        {
          text: "Cancel",
          onPress: () => {},
        },

        {
          text: "Next Step",
          onPress: () => onSubmit(data),
        },
      ]);
    } else {
      Alert.alert("You sure?", "you did choose the right option?", [
        {
          text: "Cancel",
          onPress: () => {},
        },

        {
          text: "Next Step",
          onPress: () => onSubmit(data),
        },
      ]);
    }
  };

  return (
    <View style={styles.allCards}>
      <View style={styles.CheckArea}>
        <View style={styles.bothSide}>
          <View style={styles.rightSide}>
            <Controller
              name="Option1"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={isChecked.checkbox1}
                  onValueChange={handleCheckboxChange("checkbox1")}
                />
              )}
            />

            <View style={styles.titleArea}>
              <Text style={styles.title}>Online service</Text>
              <Text style={styles.text}>Access to multiplayer games</Text>
            </View>
          </View>
          <View style={styles.leftSide}>
            <Text style={styles.price}>{price1}</Text>
          </View>
        </View>
      </View>
      <View style={styles.CheckArea}>
        <View style={styles.bothSide}>
          <View style={styles.rightSide}>
            <Controller
              name="Option2"
              defaultValue={false}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={isChecked.checkbox2}
                  onValueChange={handleCheckboxChange("checkbox2")}
                />
              )}
            />
            <View style={styles.titleArea}>
              <Text style={styles.title}>Larger storage</Text>
              <Text style={styles.text}>Extra 1TB of cloud save</Text>
            </View>
          </View>
          <View style={styles.leftSide}>
            <Text style={styles.price}>{price2}</Text>
          </View>
        </View>
      </View>
      <View style={styles.CheckArea}>
        <View style={styles.bothSide}>
          <View style={styles.rightSide}>
            <Controller
              name="Option3"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={isChecked.checkbox3}
                  onValueChange={handleCheckboxChange("checkbox3")}
                />
              )}
            />
            <View style={styles.titleArea}>
              <Text style={styles.title}>Customizable Profile</Text>
              <Text style={styles.text}>Custom theme on your profile</Text>
            </View>
          </View>
          <View style={styles.leftSide}>
            <Text style={styles.price}>{price2}</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.ButtonsArea}>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={styles.InsideButton}
              onPress={() => navigation.navigate("Type")}
            >
              Go Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text
              style={styles.InsideButton}
              onPress={() => confirmChoose(handleSubmit(onSubmit))}
            >
              Go Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
