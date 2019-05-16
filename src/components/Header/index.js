import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar backgroundColor="#DDD" barStyle="dark-content" />
    <View style={styles.left}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {}} />
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
