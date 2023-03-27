import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./style";

type Props = {
  title: string;
  price: string;
  isChecked: boolean;
  img: any;
  alt: string;
  onClick: () => void;
  selected: boolean;
};

const Card = ({ img, alt, title, price, onClick, isChecked }: Props) => {
  return (
    <TouchableOpacity style={styles(isChecked).Card} onPress={onClick}>
      <View style={styles(isChecked).CardItems}>
        <Image source={img} alt={alt} />
        <View style={styles(isChecked).CardItemsText}>
          <Text style={styles(isChecked).CardItemTitle}>{title}</Text>
          <Text style={styles(isChecked).CardItemText}>{price}</Text>
          {isChecked && (
            <Text style={styles(isChecked).CardItemYearly}>2 Months free</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
