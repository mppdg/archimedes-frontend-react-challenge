import React from 'react';
import { Route } from 'react-router-dom';
import AppLayout from '../components/common/layouts/AppLayout';

/**
 * AppRoutes
 * Maps routes and layouts to view components 
 */
const AppRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
        return (
            <AppLayout>
              <Component {...props} />
            </AppLayout>
            )
        }
    } />
  )
}

export default AppRoutes;
