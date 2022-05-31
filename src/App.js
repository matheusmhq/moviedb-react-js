import React from "react";

import RoutesApp from "./routes";
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");

const App = () => {
  return <RoutesApp />;
};

export default App;
