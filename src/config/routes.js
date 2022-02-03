import Users from '../components/views/Users';
import CreateUser from '../components/views/CreateUser';
import UpdateUser from '../components/views/UpdateUser';


const appRoutes = [
  {
    path: '/',
    component: Users,
    exact: true,
  },
  {
    path: '/users',
    component: Users,
    exact: true,
  },
  {
    path: '/users/create',
    component: CreateUser,
    exact: true,
  },
  {
    path: '/users/update',
    component: UpdateUser,
    exact: true,
  },
];

export default appRoutes;


