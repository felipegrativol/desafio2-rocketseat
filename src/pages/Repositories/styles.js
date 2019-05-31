/**
 * Desafio 2 - RocketSeat
 * Repositories Styles
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flexDirection: "column",
    alignItems: "center",
    height: metrics.screenHeight
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
    fontWeight: "bold",
    color: colors.lighter
  },
  empty: {
    flex: 1,
    marginTop: metrics.screenHeight / 3
  },
  emptyText: {
    fontSize: 17,
    color: colors.darkTransparent
  }
});
export default styles;
