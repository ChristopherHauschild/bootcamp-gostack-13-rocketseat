import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// FC > Functional Component
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    {/* + > tudo que vier depois da barra */}
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
