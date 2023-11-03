import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditNote from './components/EditNote';
import FindNote from './components/FindNote';
import Layout from './components/Layout';
import NewNote from './components/NewNote';
import Notes from './components/Notes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/notes'} />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/notes',
        element: <Notes />,
      },
      { path: '/new-note', element: <NewNote /> },
      { path: '/edit-note/:id', element: <EditNote /> },
      { path: '/find-note', element: <FindNote /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
