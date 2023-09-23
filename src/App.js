import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

// http://localhost:3000/ -> Home Component
// http://localhost:3000/profile -> Profile Component

const appRoutesDefinition = createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
  </Route>
);

// const appRouter = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/profile', element: <Profile /> },
// ]);

const appRouter = createBrowserRouter(appRoutesDefinition);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
