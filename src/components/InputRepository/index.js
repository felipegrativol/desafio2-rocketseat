import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

const InputRepository = ({ ourInputFunction, onChangeText }) => (
  <View style={styles.container}>
    <View style={styles.inputBox}>
      <TextInput
        {...this.props}
        placeholder={"Adicionar novo repositório"}
        style={styles.inputRepository}
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
      />
    </View>
    <TouchableOpacity onPress={ourInputFunction}>
      <Icon name="plus" size={22} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default InputRepository;
