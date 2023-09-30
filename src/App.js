import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage, { action as authAction } from './pages/Auth';
import EditUserPage from './pages/EditUser';
import ErrorPage from './pages/Error';
import GetNofiedPage, { action as userNotifyAction } from './pages/GetNofied';
import HomePage from './pages/Home';
import { action as logoutAction } from './pages/Logout';
import NewUserPage, { action as newUserAction } from './pages/NewUser';
import RootLayout from './pages/RootLayout';
import UserDetailsPage, { action as userDeleteAction, loader as userDetailsLoader } from './pages/UserDetails';
import UserLayout from './pages/UserLayout';
import UsersPage, { loader } from './pages/Users';
import { checkTokenLoader, tokenLoader } from './utils/util';
const appRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    loader: tokenLoader,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'users',
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <UsersPage />,
            loader: loader,
          },
          {
            path: ':userId',
            loader: userDetailsLoader,
            id: 'user-details',
            children: [
              {
                index: true,
                element: <UserDetailsPage />,
                action: userDeleteAction,
              },
              { path: 'edit', element: <EditUserPage />, action: newUserAction, loader: checkTokenLoader },
            ],
          },
          { path: 'new', element: <NewUserPage />, action: newUserAction, loader: checkTokenLoader },
        ],
      },
      { path: 'get-notified', element: <GetNofiedPage />, action: userNotifyAction },
      {
        path: 'auth',
        element: <AuthPage />,
        action: authAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
