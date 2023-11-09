import { QueryClientProvider } from '@tanstack/react-query';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditNote, { action as noteAction, loader as noteLoader } from './components/EditNote';
import FindNote from './components/FindNote';
import Layout from './components/Layout';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import ViewNote from './components/ViewNote';
import { queryClient } from './utility/queryClient';

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
      { path: '/view-note/:id', element: <ViewNote /> },
      { path: '/edit-note/:id', element: <EditNote />, loader: noteLoader, action: noteAction },
      { path: '/find-note', element: <FindNote /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
