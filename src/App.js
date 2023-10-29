import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
      { path: '/new-notes', element: <NewNote /> },
      { path: '/edit-notes/:id', element: <EditNote /> },
      { path: '/find-notes', element: <FindNote /> },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
