import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw } from "../../functions/developerFunc";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: dw(48),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: dw(16),
    paddingRight: dw(24),
    borderWidth: dw(1),
    borderColor: colors.lightGray,
  },
  leftContainer: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  centerTitleContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  rightContainer: {
    height: "80%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default styles;
