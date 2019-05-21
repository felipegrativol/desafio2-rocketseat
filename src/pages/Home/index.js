/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, FlatList, Alert } from "react-native";
import styles from "./styles";

// Components
import Header from "~/components/Header";
import InputRepository from "~/components/InputRepository";
import CardRepo from "~/components/CardRepo";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleInputFunction = this.handleInputFunction.bind(this);

    this.state = {
      items: [
        { id: "1", title: "felipegrativol", subtitle: "React Community" },
        { id: "2", title: "felipegrativol2", subtitle: "React Community2" }
      ],
      repositories: [{ title: "teste" }]
    };
  }

  handleInputFunction(event) {
    //event.preventDefault();
    Alert.alert(event + " ");
    //this.setState({ repositories: [(title = event.title)] });
  }

  // changeTitle(title) {
  //   this.setState({ repositories: [title] });
  //  }

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
        <Header title="GitIssues" />
        <View style={styles.container}>
          <View>
            <InputRepository
              ourInputFunction={this.handleInputFunction}
              //  getRepository={title => {
              //this.setState({ repositories: [(title = "teste")] });
              //this.state.repositories.push({ title: this.props.title });
              //   }}
            />
          </View>

          <View style={styles.underline} />

          <FlatList
            //key={1}
            data={this.state.repositories}
            renderItem={this.renderItem}
            numColumns={1}
          />
        </View>
      </View>
    );
  }
}
