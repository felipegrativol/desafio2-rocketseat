import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

const InputRepository = () => (
  <View style={styles.container}>
    <View style={styles.inputBox}>
      <TextInput
        placeholder={"Adicionar novo repositório"}
        style={styles.inputRepository}
        underlineColorAndroid="transparent"
      />
    </View>
    <TouchableOpacity>
      <Icon name="plus" size={16} style={styles.icon} />
    </TouchableOpacity>
  </View>
);
export default InputRepository;
