/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./styles";

// Components
import Header from "~/components/Header";
import CardIssue from "~/components/CardIssue";

// Services
import api from "~/services/api";
import { all } from "rsvp";

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title")
  });

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      searchInput: "",
      loading: false,
      pilar: "all"
    };
  }

  loadIssues = async (full_name, pilar) => {
    const { issues } = this.state;
    try {
      const { data } = await api.get(
        `https://api.github.com/repos/${full_name}/issues?state=${pilar}`
      );
      this.setState({
        issues: data,
        loading: false
      });
    } catch (err) {
      Alert.alert("Não há Issues");
    }
  };

  async componentDidMount() {
    const full_name = this.props.navigation.getParam("full_name", "Falhou");
    const { pilar } = this.state;

    this.loadIssues(full_name, pilar);
  }

  componentDidUpdate() {
    const full_name = this.props.navigation.getParam("full_name", "Falhou");
    const { pilar } = this.state;
    this.loadIssues(full_name, pilar);
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <CardIssue item={item} />
      </View>
    );
  };

  changePilar = pilar => {
    switch (pilar) {
      case 0:
        return this.setState({ pilar: "all" });

      case 1:
        return this.setState({ pilar: "open" });

      case 2:
        return this.setState({ pilar: "closed" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxButtons}>
          <TouchableOpacity onPress={() => this.changePilar(0)}>
            <Text style={styles.textButtons}>Todas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.changePilar(1)}>
            <Text style={styles.textButtons}>Abertas</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.changePilar(2)}>
            <Text style={styles.textButtons}>Fechadas</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.issues}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
          numColumns={1}
        />
      </View>
    );
  }
}
