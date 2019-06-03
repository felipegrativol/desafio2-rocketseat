/**
 * Desafio 2 - RocketSeat
 * Homepage
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import React, { Component } from "react";
import {
  View,
  FlatList,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import styles from "./styles";

// Components
//import Header from "~/components/Header";
import InputRepository from "~/components/InputRepository";
import CardRepo from "~/components/CardRepo";

// Services
import api from "~/services/api";

//PropTypes
import PropTypes from "prop-types";
import { ScrollView } from "react-native-gesture-handler";

export default class Home extends Component {
  static navigationOptions = {
    title: "GitIssues",
    headerLayoutPreset: "center"
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
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

    if (repositories) {
      this.setState({
        repositories: repositories,
        loading: false
      });
    } else {
      this.setState({ loading: false });
    }
  };

  saveRepository = async repositories => {
    await AsyncStorage.setItem("@Github:repositories", repositories);
  };

  signIn = async () => {
    this.setState({ loading: true });
    const { searchInput, repositories } = this.state;

    try {
      const { data } = await api.get(`/repos/${searchInput}`);

      if (
        this.state.repositories.find(repo => repo.full_name === searchInput)
      ) {
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
  }

  handleInputFunction = () => {
    this.signIn();
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.cardBox}>
        <CardRepo item={item} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
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
            vertical
            style={styles.containerFlatlist}
            refreshing={this.state.loading}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    );
  }
}
