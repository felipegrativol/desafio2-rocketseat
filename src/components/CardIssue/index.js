/**
 * Desafio 2 - RocketSeat
 * Component CardIssue
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import React from "react";
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  Linking
} from "react-native";

// Style
import styles from "./styles";

// PropTypes
import PropTypes from "prop-types";

// Icons
import Icon from "react-native-vector-icons/FontAwesome";

// Navigation
import { withNavigation } from "react-navigation";

const CardIssue = ({ item, navigation: { navigate } }) => {
  openURL = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert("URL indisponível:  " + url);
      }
    });
  };

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

      <TouchableOpacity onPress={() => this.openURL(item.html_url)}>
        <Icon name="angle-right" size={22} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

CardIssue.propTypes = {
  item: PropTypes.shape({
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    }).isRequired,
    html_url: PropTypes.string
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};

export default withNavigation(CardIssue);
