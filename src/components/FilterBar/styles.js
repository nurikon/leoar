import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw } from "../../functions/developerFunc";
const styles = StyleSheet.create({
  container: {
    height: dw(40),
    paddingVertical: dw(5),
    borderBottomWidth: dw(1),
    borderBottomColor: colors.lightGray,
    flexDirection: "row",
  },
  itemContainer: {
    marginRight: dw(8),
    paddingHorizontal: dw(5),
    alignItems: "center",
    justifyContent: "center",
    height: dw(30),
  },
  headerComponent: {
    paddingHorizontal: dw(5),
    alignItems: "center",
    justifyContent: "center",
    height: dw(30),
  },
});

export default styles;
