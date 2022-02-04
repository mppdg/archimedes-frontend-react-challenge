import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import axios from 'axios';
import routes from '../config/routes';
import AppRoutes from '../HOCs/AppRoutes';
import '../assets/styles/app.scss';

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

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

