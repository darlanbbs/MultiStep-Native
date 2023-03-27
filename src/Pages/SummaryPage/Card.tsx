import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useForm } from "./../../Context/UseContext";
import styles from "./styles";

type Props = {
  title: string;
  type: string;
  price: string;
  navigation: any;
};

function Card({ title, price, type, navigation }: Props) {
  const { state, formData } = useForm();
  const [result, setResult] = useState<any>(0);

  useEffect(() => {
    if (formData != undefined) {
      function getPriceValue(priceString: any) {
        let priceWithoutDollar = priceString.replace("$", "");

        let priceWithoutSlash = priceWithoutDollar.replace("/", "");

        let priceWithoutUnit = priceWithoutSlash
          .replace("mo", "")
          .replace("yr", "");

        let priceValue = parseFloat(priceWithoutUnit);

        return priceValue;
      }

      const newPrice = getPriceValue(price);
      const newPrice1 = getPriceValue(price1);
      const newPrice2 = getPriceValue(price2);

      let newResult = newPrice;
      if (formData.isChecked.checkbox1) {
        newResult += newPrice1;
      }
      if (formData.isChecked.checkbox2) {
        newResult += newPrice2;
      }
      if (formData.isChecked.checkbox3) {
        newResult += newPrice2;
      }
      setResult(newResult);
    }
  }, [formData]);

  const price1 = state.type === "Yearly" ? "$10/Yr" : "$01/Mo";
  const price2 = state.type === "Yearly" ? "$20/Yr" : "$02/Mo";
  return (
    <View style={styles.AllCards}>
      {formData !== undefined && (
        <View style={styles.Result}>
          <View style={styles.finalAreaItens}>
            <View style={styles.ChangeArea}>
              <Text style={styles.firstItem}>
                {title}({type})
              </Text>
              <Text
                style={styles.changeText}
                onPress={() => navigation.navigate("Type")}
              >
                Change
              </Text>
            </View>
            <Text style={styles.firstItem}>{price}</Text>
          </View>
          <View style={styles.hr}></View>
          {formData.isChecked.checkbox1 && (
            <View style={styles.finalAreaItens}>
              <Text style={styles.Itens}>Online service</Text>
              <Text style={styles.serviceResult}>{price1}</Text>
            </View>
          )}
          {formData.isChecked.checkbox2 && (
            <View style={styles.finalAreaItens}>
              <Text style={styles.Itens}>Larger storage</Text>
              <Text style={styles.serviceResult}>{price2}</Text>
            </View>
          )}
          {formData.isChecked.checkbox3 && (
            <View style={styles.finalAreaItens}>
              <Text style={styles.Itens}>Customizable Profile</Text>
              <Text style={styles.serviceResult}>{price2}</Text>
            </View>
          )}
        </View>
      )}
      <View style={styles.resultArea}>
        <View style={styles.finalAreaItens}>
          <Text style={styles.Itens}>Total per ({type})</Text>
          <Text style={styles.firstItem}>
            +${result}/{type}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
