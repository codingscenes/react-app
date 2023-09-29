import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditUser from './pages/EditUser';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import NewUser, { action as newUserAction } from './pages/NewUser';
import RootLayout from './pages/RootLayout';
import UserDetailsPage, { loader as userDetailsLoader } from './pages/UserDetails';
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
              },
              { path: 'edit', element: <EditUser /> },
            ],
          },
          { path: 'new', element: <NewUser />, action: newUserAction },
        ],
      },
      ,
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
