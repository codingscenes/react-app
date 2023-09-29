import { json, redirect } from 'react-router-dom';
import UserForm from './../components/UserForm';

const NewUserPage = () => {
  return <UserForm />;
};
export default NewUserPage;

export async function action({ request, params }) {
  const userId = params.userId;
  const data = await request.formData();
  const userData = {
    name: data.get('name'),
    skills: data.get('skills'),
    experience: data.get('experience'),
  };

  let url = 'http://localhost:8001/users';

  if (userId) {
    url = `http://localhost:8001/users/${userId}/edit`;
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ msg: 'Can not submit the data!' }, { status: 500 });
  }
  return redirect('/users');
}
