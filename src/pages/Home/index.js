/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import styles from "./styles";

// Components
import Header from "~/components/Header";
import InputRepository from "~/components/InputRepository";
import CardRepo from "~/components/CardRepo";

// Services
import api from "~/services/api";

//PropTypes
import PropTypes from "prop-types";

export default class Home extends Component {
  static navigationOptions = {
    title: "GitIssues",
    //headerRight: <View />
    // headerTitleStyle: { textAlign: "center", alignSelf: "center" }
    headerLayoutPreset: "center"
  };

  constructor(props) {
    super(props);

    this.handleInputFunction = this.handleInputFunction.bind(this);

    this.state = {
      repositories: [],
      searchInput: "",
      loading: false
    };
  }

  loadRepositories = async () => {
    this.setState({ loading: true });

    const repositories = JSON.parse(
      await AsyncStorage.getItem("@Github:repositories")
    );

    this.setState({
      repositories: repositories,
      loadingList: false,
      loading: false
    });
  };

  saveRepository = async repositories => {
    await AsyncStorage.setItem("@Github:repositories", repositories);
  };

  signIn = async () => {
    this.setState({ loading: true });
    const { searchInput, repositories } = this.state;
    try {
      const { data } = await api.get(`/repos/${searchInput}`);

      if (repositories.find(repo => repo.full_name === searchInput)) {
        Alert.alert("Repositório já inserido");
        this.setState({ loading: false });
      } else {
        await this.setState({
          repositories: [...repositories, data],
          loading: false
        });
        await AsyncStorage.setItem(
          "@Github:repositories",
          JSON.stringify([...repositories, data])
        );
      }
    } catch (_err) {
      Alert.alert("Repositório Inexistente");
      this.setState({ loading: false });
    }
  };

  async componentDidMount() {
    this.loadRepositories();
    //const username = await AsyncStorage.getItem("@Githuber:username");
    // const response = await api.get(`/users/${username}/repos`); // pega todos os repositorios do username
  }

  handleInputFunction = () => {
    //event.preventDefault();
    //Alert.alert(`event: ${this.state.searchInput}`);
    //this.setState({ repositories: [(title = event.title)] });
    this.signIn();
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <CardRepo item={item} />
      </View>
    );
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View>
            <InputRepository
              ourInputFunction={this.handleInputFunction}
              onChangeText={searchInput => this.setState({ searchInput })}
            />
          </View>

          <View style={styles.underline} />

          {this.state.loading ? (
            <ActivityIndicator size="large" color="#333" />
          ) : (
            <FlatList
              data={this.state.repositories}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderItem}
              numColumns={1}
            />
          )}
        </View>
      </View>
    );
  }
}
