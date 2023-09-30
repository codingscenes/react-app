import { json, redirect } from 'react-router-dom';

import AuthForm from '../components/AuthForm';
import { saveAuthToken } from './../utils/util';

const AuthPage = () => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-lg-6 col-6'>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
export default AuthPage;

export async function action({ request }) {
  const url = request.url;
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({ message: 'mode is not valid!' });
  }

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  const response = await fetch('http://localhost:8001/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 400 || response.status === 401 || response.status === 409) {
    return response;
  }

  if (!response.ok) {
    throw json({ msg: 'Can not authenticate the user' }, { status: 500 });
  }

  // access token
  const respData = await response.json();

  const token = respData.token;

  saveAuthToken(token);

  return redirect('/');
}
