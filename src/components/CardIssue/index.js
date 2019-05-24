import React from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";

import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";

import { withNavigation } from "react-navigation";

const CardIssue = ({ item, navigation: { navigate } }) => {
  console.tron.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {item && (
          <Image style={styles.avatar} source={{ uri: item.user.avatar_url }} />
        )}

        <View>
          <Text style={styles.title}>{item.title}</Text>
          {item && <Text style={styles.subtitle}>{item.user.login}</Text>}
        </View>
      </View>

      <TouchableOpacity
      // onPress={() => {
      //   navigate("Repositories", {
      //     title: item.name,
      //     full_name: item.full_name
      //   });
      // }}
      >
        <Icon name="angle-right" size={22} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(CardIssue);
