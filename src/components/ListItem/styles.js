import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw } from "../../functions/developerFunc";


const styles = StyleSheet.create({
  container: {
    width: dw(375),
    paddingHorizontal: dw(15),
    paddingVertical: dw(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
  },
  right: {
    width: dw(55),
    height: dw(30),
    borderRadius: dw(15),
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageWrapper: {
    borderWidth: dw(1),
    padding: dw(3),
    borderColor: colors.softGray,
    borderRadius: dw(13),
    marginRight: dw(10),
  },
  profileImage: {
    width: dw(55),
    height: dw(55),
    borderRadius: dw(11),
  },
  titlesWrapper: {
    justifyContent: "center",
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: dw(14),
    width: dw(200),
  },
  nameTitle: {
    fontSize: dw(12),
    width: dw(200),
  },
});


export default styles;
