import { useQuery } from '@tanstack/react-query';
import { redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';
import { fetchNoteById, updateNote } from '../utility/http';
import { queryClient } from './../utility/queryClient';
import ErrorBlock from './ErrorBlock';
import NoteForm from './NoteForm';

const EditNote = () => {
  const navigate = useNavigate();
  const params = useParams();
  const submit = useSubmit();
  const navigation = useNavigation();

  const { data, isError, error } = useQuery({
    queryKey: ['notes', { id: params.id }],
    queryFn: ({ signal }) => fetchNoteById({ signal, id: params.id }),
    staleTime: 5 * 1000, // 5 sec
  });

  // const { mutate } = useMutation({
  //   mutationFn: updateNote,
  //   // onSuccess: () => {
  //   //   queryClient.invalidateQueries({
  //   //     queryKey: ['notes', { id: params.id }],
  //   //   });
  //   //   navigate(`/view-note/${params.id}`);
  //   // },
  //   onMutate: async (data) => {
  //     const note = data.payload;
  //     // cancelling query to avoid old server data
  //     await queryClient.cancelQueries({
  //       queryKey: ['notes', { id: params.id }],
  //     });
  //     // getting previous data (note)
  //     const previousNote = queryClient.getQueryData(['notes', { id: params.id }]);
  //     queryClient.setQueryData(['notes', { id: params.id }], note);

  //     return {
  //       previousNote,
  //     };
  //   },
  //   onSuccess: () => {
  //     console.log('Note has been updated!');
  //   },
  //   onError: (error, data, context) => {
  //     queryClient.setQueryData(['notes', { id: params.id }], context.previousNote);
  //     console.error('Note failed to update!');
  //   },
  //   onSettled: () => {
  //     // query invalidate - UI + bakend => sync
  //     queryClient.invalidateQueries({
  //       queryKey: ['notes', { id: params.id }],
  //     });
  //   },
  // });

  const noteSubmissionHandler = (note) => {
    // mutate({ id: params.id, payload: note });
    // navigate(`/view-note/${params.id}`);
    console.log(note);
    submit(note, {
      method: 'PUT',
    });
  };

  let content = 'Fetching notes...';

  // if (isLoading) {
  //   content = <LoadingBlock />;
  // }

  if (isError) {
    content = <ErrorBlock message={error.message} />;
  }

  if (data) {
    content = <NoteForm data={data} onSubmit={noteSubmissionHandler} />;
  }
  return (
    <div className='new-note-container'>
      <h1>Edit Note!</h1>
      {content}
      {navigation.state === 'submitting' && 'Please wait...'}
    </div>
  );
};
export default EditNote;

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ['notes', { id: params.id }],
    queryFn: ({ signal }) => fetchNoteById({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedNoteData = Object.fromEntries(formData);
  await updateNote({ id: params.id, payload: updatedNoteData });
  // update the cache related to notes
  await queryClient.invalidateQueries(['notes']);
  return redirect(`/view-note/${params.id}`);
}
