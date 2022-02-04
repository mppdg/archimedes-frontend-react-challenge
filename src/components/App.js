import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import routes from '../config/routes';
import AppRoutes from '../HOCs/AppRoutes';
import '../assets/styles/app.scss';
import { AppProvider } from '../context/AppContext';

const displayInit = { success: true, message: "" };

const App = () => {
  const [display, setDisplay] = useState(displayInit);

  useEffect(() => {
    if (!display.message) return;
    setTimeout(() => setDisplay(displayInit), 4000);
  }, [display])

  return (
    <AppProvider value={{ display, setDisplay }}>
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
  </AppProvider>
)}

export default App;

