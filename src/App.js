import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import RootLayout from './pages/Root';
import UserDetailPage from './pages/UserDetail';
import UsersPage from './pages/Users';

const appRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/users', element: <UsersPage /> },
      { path: '/users/:userId', element: <UserDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
