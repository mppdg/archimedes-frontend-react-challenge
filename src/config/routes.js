import { Redirect } from 'react-router-dom';
import Users from '../components/views/Users';
import CreateUser from '../components/views/CreateUser';
import UpdateUser from '../components/views/UpdateUser';
import { CREATE_USER_ROUTE, DEFAULT_ROUTE, HOME_ROUTE, UPDATE_USER_ROUTE, USERS_ROUTE } from '../constants';
import PageNotFound from '../components/views/PageNotFound';


const appRoutes = [
  {
    path: HOME_ROUTE,
    component: () => <Redirect to={USERS_ROUTE} />,
    exact: true,
  },
  {
    path: USERS_ROUTE,
    component: Users,
    exact: true,
  },
  {
    path: CREATE_USER_ROUTE,
    component: CreateUser,
    exact: true,
  },
  {
    path: UPDATE_USER_ROUTE,
    component: UpdateUser,
    exact: true,
  },
  {
    path: DEFAULT_ROUTE,
    component: PageNotFound,
  },
];

export default appRoutes;


