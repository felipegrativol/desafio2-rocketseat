/**
 * Desafio 2 - RocketSeat
 * InputRepository Styles
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: metrics.screenWidth,
    height: metrics.screenHeight / 6,
    padding: metrics.basePadding
  },
  inputBox: {
    flex: 1,
    backgroundColor: colors.white,
    width: metrics.screenWidth - 150,
    height: metrics.screenHeight / 15,
    borderRadius: metrics.baseRadius,
    borderColor: colors.light,
    borderWidth: 1,
    marginTop: metrics.baseMargin * 2
  },
  inputRepository: {
    fontSize: 18
  },
  iconBox: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: metrics.baseMargin * 2,
    height: 50,
    width: 50
  },

  icon: {
    color: colors.darker
  }
});
export default styles;
