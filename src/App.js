import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditUser from './pages/EditUser';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import NewUser from './pages/NewUser';
import RootLayout from './pages/RootLayout';
import UserLayout from './pages/UserLayout';
import UsersPage, { USER_API } from './pages/Users';

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
            loader: async () => {
              const response = await fetch(USER_API);
              if (!response.ok) {
                // TODO : handle it later
              } else {
                const responseData = await response.json();
                return responseData;
              }
            },
          },
          { path: ':new', element: <NewUser /> },
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
