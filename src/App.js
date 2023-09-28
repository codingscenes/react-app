import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditUser from './pages/EditUser';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import NewUser from './pages/NewUser';
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
            element: <UserDetailsPage />,
            loader: userDetailsLoader,
          },
          { path: 'new', element: <NewUser /> },
          { path: ':userId/edit', element: <EditUser /> },
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
