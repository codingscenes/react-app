import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import FindNote from './components/FindNote';
import Layout from './components/Layout';
import NewNote from './components/NewNote';
import Note from './components/Note';
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
      { path: '/new-notes', element: <NewNote /> },
      { path: '/find-notes', element: <FindNote /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
