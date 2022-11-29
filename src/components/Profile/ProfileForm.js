import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const newPasswordInputRef = useRef('');
  const authCtx = useContext(AuthContext);
  const hisotry = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBN29U0If0bHmVTqtA-9V5zpDMZ5x2IeVM',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          console.log('error:', data);
          throw new Error('Something went wrong!');
        });
      })
      .then((result) => {
        console.log(result);
        //redirect to any other page
        hisotry.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className='auth'>
      <form className='ui form' onSubmit={submitHandler}>
        <div className='field'>
          <label htmlFor='new-password'>New Password</label>
          <input
            type='password'
            id='new-password'
            ref={newPasswordInputRef}
            minLength='7'
          />
        </div>
        <div className='field'>
          <button className='ui button basic blue'>Change Password</button>
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;
