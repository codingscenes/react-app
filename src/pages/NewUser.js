import { json, redirect } from 'react-router-dom';
import UserForm from './../components/UserForm';

const NewUser = () => {
  return <UserForm />;
};
export default NewUser;

export async function action({ request, params }) {
  const data = await request.formData();

  const userData = {
    name: data.get('name'),
    skills: data.get('skills'),
    experience: data.get('experience'),
  };

  const response = await fetch('http://localhost:8001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw json({ msg: 'Can not submit the data!' }, { status: 500 });
  }
  return redirect('/users');
}
