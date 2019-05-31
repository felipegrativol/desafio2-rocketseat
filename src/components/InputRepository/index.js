/**
 * Desafio 2 - RocketSeat
 * Component InputRepository
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

// PropTypes
import PropTypes from "prop-types";

// Icons
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
    <View style={styles.iconBox}>
      <TouchableOpacity onPress={ourInputFunction}>
        <Icon name="plus" size={22} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);

InputRepository.propTypes = {
  ourInputFunction: PropTypes.func,
  onChangeText: PropTypes.func
};

export default InputRepository;
