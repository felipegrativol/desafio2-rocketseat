import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";

const CardRepo = ({ item }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>

    <TouchableOpacity>
      <Icon name="angle-right" size={22} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default CardRepo;
