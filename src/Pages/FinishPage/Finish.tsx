import React from "react";
import { View, Text, Image } from "react-native";
import style from "./style";

type Props = {};

const Finish = (props: Props) => {
  return (
    <View style={style.Container}>
      <View style={style.FinishArea}>
        <Image source={require("../../../public/icon-thank-you.png")} />
        <Text style={style.FinalText}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Text>
      </View>
    </View>
  );
};

export default Finish;
