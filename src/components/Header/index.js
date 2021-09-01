import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Header = ({ centerTitle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftContainer}>
        <Text>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.centerTitleContainer}>
        <Text>{centerTitle}</Text>
      </View>
      <TouchableOpacity style={styles.rightContainer}>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
