import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";

const MyPageLayout = ({
  children,
  statusBarColor = "white",
  barStyle = "dark-content",
}) => {
  return (
    <View style={{ flex: 1, backgroundColor:'white' }}>
      <StatusBar
        animation={true}
        backgroundColor={statusBarColor}
        barStyle={barStyle}
      />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default MyPageLayout;
