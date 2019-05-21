import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  inputBox: {
    backgroundColor: colors.white,
    width: metrics.screenWidth - 110,
    height: metrics.screenHeigt / 15,
    borderRadius: metrics.baseRadius,
    borderColor: colors.light,
    borderWidth: 1,
    marginTop: metrics.baseMargin,
    justifyContent: "space-between"
  },
  inputRepository: {
    // width: metrics.screenWidth - 20,
    // height: metrics.screenHeigt / 10,
    // justifyContent: "center"
    fontSize: 18
  },
  icon: {
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding + 5,
    color: colors.darker
  }
});
export default styles;
