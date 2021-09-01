import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { dw, Capitalize } from "../../functions/developerFunc";
import styles from "./styles";


const FilterBar = ({ tags, onSelectedTags }) => {
  const [data, setData] = useState([]);
  const [showingAll, setShowingAll] = useState(true);

  useEffect(() => {
    let _tags = [];
    for (let i in tags) {
      const item = { tagName: tags[i], isSelected: false };
      _tags.push(item);
    }
    setData(_tags);
  }, [tags]);

  function onPressItem({ item, index }) {
    const manupulatedArr = [...data];
    const selectedTags = [];
    manupulatedArr[index].isSelected = !item.isSelected;
    setData(manupulatedArr);
    for (let i in manupulatedArr) {
      if (manupulatedArr[i].isSelected) {
        selectedTags.push(manupulatedArr[i].tagName);
      }
    }
    onSelectedTags(selectedTags);
    if (selectedTags.length == 0) {
      setShowingAll(true);
    } else {
      setShowingAll(false);
    }
  }

  function onPressAll() {
    for(let i in data){
      data[i].isSelected=false
    }
    setShowingAll(true);
    onSelectedTags([]);
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem({ item, index })}
        activeOpacity={0.6}
        style={[styles.itemContainer, { marginLeft: index === 0 ? dw(8) : 0 }]}
      >
        <Text style={{ fontWeight: item.isSelected ? "bold" : "normal" }}>
          {Capitalize(item.tagName)}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderHeaderItem = () => {
    return (
      <TouchableOpacity
        onPress={onPressAll}
        activeOpacity={0.6}
        style={[styles.headerComponent]}
      >
        <Text style={{ fontWeight: showingAll ? "bold" : "normal" }}>All</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={renderHeaderItem}
        ListHeaderComponentStyle={{ marginLeft: dw(8) }}
      />
    </View>
  );
};

export default FilterBar;
