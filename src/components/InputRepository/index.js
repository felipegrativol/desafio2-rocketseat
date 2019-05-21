import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

class InputRepository extends Component {
  constructor(props) {
    super();

    // this.handler = this.handler.bind(this);

    this.state = {
      title: ""
    };
  }

  getRepository = title => {
    if (this.state.title != "") {
      //Alert.alert(this.state.title + " <= repositório digitado");
      this.props.ourInputFunction(this.state.title);
    } else {
      Alert.alert(
        "Inválido",
        " Digite um nome de repositório válido ",
        [{ text: "OK" }],
        {
          cancelable: false
        }
      );
      //return (this.props.title = "");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            placeholder={"Adicionar novo repositório"}
            style={styles.inputRepository}
            underlineColorAndroid="transparent"
            value={this.state.title}
            onChangeText={title => this.setState({ title })}
            // onChange={this.props.ourInputFunction}
            type="text"
          />
        </View>
        <TouchableOpacity
          onPress={this.getRepository}
          onChange={this.props.ourInputFunction}
        >
          <Icon name="plus" size={22} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default InputRepository;
