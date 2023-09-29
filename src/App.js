import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditUserPage from './pages/EditUser';
import ErrorPage from './pages/Error';
import GetNofiedPage, { action as userNotifyAction } from './pages/GetNofied';
import HomePage from './pages/Home';
import NewUserPage, { action as newUserAction } from './pages/NewUser';
import RootLayout from './pages/RootLayout';
import UserDetailsPage, { action as userDeleteAction, loader as userDetailsLoader } from './pages/UserDetails';
import UserLayout from './pages/UserLayout';
import UsersPage, { loader } from './pages/Users';

const appRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
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
              { path: 'edit', element: <EditUserPage />, action: newUserAction },
            ],
          },
          { path: 'new', element: <NewUserPage />, action: newUserAction },
        ],
      },
      { path: '/get-notified', element: <GetNofiedPage />, action: userNotifyAction },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
