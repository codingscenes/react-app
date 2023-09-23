import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

// http://localhost:3000/ -> Home Component
// http://localhost:3000/profile -> Profile Component

const appRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
