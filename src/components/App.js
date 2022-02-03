import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from '../config/routes';
import AppRoutes from '../HOCs/AppRoutes';
import '../assets/styles/app.scss';

const App = () => (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <AppRoutes
            key={`app-${index}`}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
);

export default App;

