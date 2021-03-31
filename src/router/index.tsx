import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import {
  Main,
  Login,
  Cadastro,
  Materia,
  MateriaStore,
  
} from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <PrivateRoute exact path="/" component={Main} />
      <PrivateRoute exact path="/materia/:id" component={MateriaStore} />
      <PrivateRoute exact path="/materia" component={Materia} />
      
    </Switch>
  );
};

export default Routes;
