import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.lighter,
    justifyContent: "flex-start",
    alignItems: "center",
    height: metrics.screenHeight,
    width: metrics.screenWidth
  },
  inputBox: {
    flex: 0,
    width: metrics.screenWidth,
    height: metrics.screenHeight / 20
  },
  underline: {
    flex: 0,
    borderBottomColor: "#dbdbdb",
    borderBottomWidth: 1,
    marginTop: metrics.baseMargin * 10,
    marginBottom: metrics.baseMargin,
    width: metrics.screenWidth - 40
  },
  containerFlatlist: {
    flex: 1,
    height: metrics.screenHeight,
    width: metrics.screenWidth
  },
  cardBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: metrics.screenWidth
  }
});
export default styles;
