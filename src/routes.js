/**
 * Desafio 2 - RocketSeat
 * ROUTES
 *
 * @author Luiz Felipe H. Grativol
 *
 */

import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "~/pages/Home";
import Repositories from "~/pages/Repositories";

// Colors
import { colors } from "~/styles";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Repositories
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null,
        headerTitleContainerStyle: {
          left: 0
        },
        headerTitleStyle: {
          flex: 1,
          textAlign: "center"
        }
      }
    },
    {
      headerLayoutPreset: "center"
    }
  )
);

export default Routes;
