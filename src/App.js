import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import UsersPage from './pages/Users';

const appRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/users', element: <UsersPage /> },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
