import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../../res/style/colors";
import styles from "./styles";

const ListItem = ({ item, onPressChose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.profileImageWrapper}>
          <Image source={{ uri: item.thumbUrl }} style={styles.profileImage} />
        </View>
        <View style={styles.titlesWrapper}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.mainTitle}>
            {item.name}
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.nameTitle}>
            {item.artistName}
          </Text>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.nameTitle}>
            {item.tags.map((tag, i) => {
              return <Text key={i}>{"#" + tag + " "}</Text>;
            })}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={onPressChose}
        activeOpacity={0.7}
        style={[
          styles.right,
          { backgroundColor: item.isSelected ? colors.gray : colors.softGray },
        ]}
      >
        <Text>Chose</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

