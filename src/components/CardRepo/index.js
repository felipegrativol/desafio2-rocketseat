/**
 * Desafio 2 - RocketSeat
 * Component CardRepo
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";

import { withNavigation } from "react-navigation";

const CardRepo = ({ item, navigation: { navigate } }) => (
  <View style={styles.container}>
    <View style={styles.box}>
      <Image style={styles.avatar} source={{ uri: item.owner.avatar_url }} />

      <View>
        <Text style={styles.title}>{item.name}</Text>
        {item.owner.login && (
          <Text style={styles.subtitle}>{item.owner.login}</Text>
        )}
      </View>
    </View>

    <TouchableOpacity
      onPress={() => {
        navigate("Repositories", {
          title: item.name,
          full_name: item.full_name
        });
      }}
    >
      <Icon name="angle-right" size={22} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

CardRepo.propTypes = {
  item: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    }),
    name: PropTypes.string,
    full_name: PropTypes.string
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default withNavigation(CardRepo);
