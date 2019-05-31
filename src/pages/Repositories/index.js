/**
 * Desafio 2 - RocketSeat
 * Repositories Issues
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
  Linking
} from "react-native";
import styles from "./styles";

// Components
//import Header from "~/components/Header";
import CardIssue from "~/components/CardIssue";

// Services
import api from "~/services/api";
import { all } from "rsvp";

// Colors
import { colors } from "~/styles";

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title")
  });

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      loading: false,
      pilar: "all",
      issuesFiltered: []
    };
  }

  loadIssues = async full_name => {
    this.setState({ loading: true });
    try {
      const { data } = await api.get(
        `https://api.github.com/repos/${full_name}/issues?state=all`
      );
      this.setState({
        issues: data
      });
    } catch (err) {
      Alert.alert("Não há Issues");
    }
  };

  async componentDidMount() {
    const full_name = this.props.navigation.getParam("full_name", "Falhou");
    await this.loadIssues(full_name);
    await this.changePilar(0);
    await this.setState({ loading: false });
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <CardIssue item={item} />
      </View>
    );
  };

  changePilar = pilar => {
    const { issues } = this.state;

    switch (pilar) {
      case 0:
      default:
        return this.setState({
          pilar: "all",
          issuesFiltered: issues.filter(
            issue => issue.state === "closed" || issue.state === "open"
          )
        });

      case 1:
        return this.setState({
          pilar: "open",
          issuesFiltered: issues.filter(issue => issue.state === "open")
        });

      case 2:
        return this.setState({
          pilar: "closed",
          issuesFiltered: issues.filter(issue => issue.state === "closed")
        });
    }
  };

  render() {
    const { pilar, issuesFiltered, loading } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.boxButtons}>
          <TouchableOpacity onPress={() => this.changePilar(0)}>
            <Text
              style={
                pilar === "all"
                  ? [styles.textButtons, { color: colors.dark }]
                  : styles.textButtons
              }
            >
              Todas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.changePilar(1)}>
            <Text
              style={
                pilar === "open"
                  ? [styles.textButtons, { color: colors.dark }]
                  : styles.textButtons
              }
            >
              Abertas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.changePilar(2)}>
            <Text
              style={
                pilar === "closed"
                  ? [styles.textButtons, { color: colors.dark }]
                  : styles.textButtons
              }
            >
              Fechadas
            </Text>
          </TouchableOpacity>
        </View>

        {!issuesFiltered.length && !loading && (
          <View style={styles.empty}>
            <Text style={styles.emptyText}> Não há Issues </Text>
          </View>
        )}

        {loading ? (
          <ActivityIndicator size="large" color="#333" />
        ) : (
          <FlatList
            data={issuesFiltered}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
            numColumns={1}
            //onPress={item => this.openURL(item.url)}
          />
        )}
      </View>
    );
  }
}
