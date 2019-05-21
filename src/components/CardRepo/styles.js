import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    width: metrics.screenWidth - 40,
    padding: metrics.basePadding,
    margin: metrics.baseMargin - 5,
    borderRadius: metrics.baseRadius
  },

  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: colors.dark
  },

  subtitle: {
    fontSize: 14,
    color: colors.regular
  },

  icon: {
    color: colors.light
  }
});

export default styles;
