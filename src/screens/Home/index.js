import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { MyPageLayout, Header, FilterBar, ListItem } from "../../components";

const url =
  "https://gist.githubusercontent.com/ardalahmet/5eb3126d9a9d9ca1c689f3ee309e2972/raw/bdabb92aa83ed3ea8354a8015660fa444228e12a/musicData.json";

const Home = () => {
  const [allTags, setAllTags] = useState([]);
  const [data, setData] = useState([]);
  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((val) => {
        const dataArr = Object.values(val.data);
        const tags = [];
        for (let i in dataArr) {
          dataArr[i].isSelected = false;
        }
        for (let i in dataArr) {
          for (let j in dataArr[i].tags) {
            if (!tags.includes(dataArr[i].tags[j])) {
              tags.push(dataArr[i].tags[j]);
            }
          }
        }
        setData(dataArr);
        setFiltredData(dataArr);
        setAllTags(tags);
      })
      .catch((error) => console.log(error));
  }, []);

  function onFiltreData(selectedTags) {
    for(let i in data){
      data[i].isSelected=false
    }
    if (selectedTags.length === 0) {
      setFiltredData(data);
    } else {
      const newData = [];
      for (let i in data) {
        let counter = 0;
        for (let j in selectedTags) {
          if (data[i].tags.includes(selectedTags[j]) && counter < 1) {
            newData.push(data[i]);
            counter++;
          }
        }
      }
      setFiltredData(newData);
    }
  }

  function onPressChose({ item, index }) {
    const displayedData = [...filtredData];
    displayedData[index].isSelected = !item.isSelected;
    setFiltredData(displayedData);
  }
  return (
    <View style={{ flex: 1 }}>
      <MyPageLayout>
        <Header centerTitle={"Choose Music"} />
        <FilterBar
          tags={allTags}
          onSelectedTags={(selectedTags) => onFiltreData(selectedTags)}
        />
        <FlatList
          data={filtredData}
          renderItem={({ item, index }) => {
            return (
              <ListItem
                onPressChose={() => onPressChose({ item, index })}
                item={item}
              />
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
      </MyPageLayout>
    </View>
  );
};

export default Home;
