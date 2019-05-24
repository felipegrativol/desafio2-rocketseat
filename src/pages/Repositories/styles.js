import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flexDirection: "column",
    alignItems: "center"
  },
  boxButtons: {
    backgroundColor: colors.light,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    width: metrics.screenWidth - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: metrics.basePadding * 2,
    margin: metrics.baseMargin,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding - 17,
    marginTop: metrics.baseMargin * 2
  },
  textButtons: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default styles;
