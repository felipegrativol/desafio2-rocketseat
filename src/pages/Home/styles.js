import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flexDirection: "column",
    alignItems: "center"
  },
  underline: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    width: metrics.screenWidth - 40
  }
});
export default styles;
