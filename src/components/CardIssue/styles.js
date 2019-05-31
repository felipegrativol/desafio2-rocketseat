import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: metrics.basePadding,
    margin: metrics.baseMargin - 5,
    borderRadius: metrics.baseRadius
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.dark,
    marginLeft: metrics.baseMargin * 2
  },

  subtitle: {
    fontSize: 14,
    color: colors.regular,
    marginLeft: metrics.baseMargin * 2
  },

  icon: {
    color: colors.light,
    marginLeft: metrics.baseMargin * 2,
    padding: metrics.basePadding
  },
  avatar: {
    height: 50,
    width: 50
  }
});

export default styles;
