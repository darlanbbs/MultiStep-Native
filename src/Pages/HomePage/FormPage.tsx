import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm as UseFormRHF, Controller } from "react-hook-form";
import styles from "./styles";
import Title from "../GlobalItens/Title";
import React, { useEffect, useState } from "react";
import { schema } from "../GlobalItens/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { formActions, useForm } from "../../Context/UseContext";

export default function App({ navigation }: any) {
  const { dispatch, setFormData } = useForm();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch({
      type: formActions.setCurrentStep,
      payload: 1,
    });
    navigation.addListener("focus", () => setLoad(!load));
  }, [load, navigation]);

  interface FormData {
    firstName: string;
    email: string;
    phoneNumber: number;
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = UseFormRHF<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    setFormData(data);
    navigation.navigate("Type");
  };

  return (
    <View style={styles.Container}>
      <View style={styles.InputArea}>
        <Title
          title="Personal info"
          subTitle="Please provide your name, email address, and phone number."
        />
        <View style={styles.Labels}>
          <Text style={styles.Label}>Name</Text>
          {errors.firstName && (
            <Text style={styles.ErrorText}>{errors.firstName?.message}</Text>
          )}
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.Input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
        />

        <View style={styles.Labels}>
          <Text style={styles.Label}>Email</Text>
          {errors.email && (
            <Text style={styles.ErrorText}>{errors.email?.message}</Text>
          )}
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.Input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />

        <View style={styles.Labels}>
          <Text style={styles.Label}>Phone Number</Text>
          {errors.phoneNumber && (
            <Text style={styles.ErrorText}>{errors.phoneNumber?.message}</Text>
          )}
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.Input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phoneNumber"
        />

        <View style={styles.ButtonArea}>
          <TouchableOpacity
            style={styles.NextStep}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.TextButton}>Next Step</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
