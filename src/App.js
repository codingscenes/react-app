import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Home from './pages/Home';
import RootLayout from './pages/Root';
import UsersPage from './pages/Users';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/users', element: <UsersPage /> },
    ],
  }
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
