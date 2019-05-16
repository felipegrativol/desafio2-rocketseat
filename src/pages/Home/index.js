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
import InputRepository from "~/components/InputRepository";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header title="GitIssues" />
        <View style={styles.container}>
          <View>
            <InputRepository />
          </View>

          <View style={styles.underline} />
        </View>
      </View>
    );
  }
}
