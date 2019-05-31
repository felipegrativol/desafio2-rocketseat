/**
 * Desafio 2 - RocketSeat
 * Header Styles
 *
 * @author Luiz Felipe H. Grativol
 * @deprecated
 */

import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    height: 44 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.whiteTransparent,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.dark
  },

  left: {
    flex: 1,
    alignItems: "center",
    marginBottom: metrics.baseMargin * 2
  }
});
export default styles;
