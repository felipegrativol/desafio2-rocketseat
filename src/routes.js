import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from "~/pages/Home";
import Repositories from "~/pages/Repositories";

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Repositories
  })
);

export default Routes;
