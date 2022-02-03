import Users from '../components/views/Users';
import CreateUser from '../components/views/CreateUser';
import UpdateUser from '../components/views/UpdateUser';
import { CREATE_USER_ROUTE, HOME_ROUTE, UPDATE_USER_ROUTE, USERS_ROUTE } from '../constants';


const appRoutes = [
  {
    path: HOME_ROUTE,
    component: Users,
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
];

export default appRoutes;


