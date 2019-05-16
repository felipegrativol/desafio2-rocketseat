/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

// Components
import Header from "~/components/Header";

export default class Repositories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
      </View>
    );
  }
}
