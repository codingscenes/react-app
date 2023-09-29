import { Form, useActionData, useNavigation } from 'react-router-dom';

const UserForm = ({ user }) => {
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='form-box'>
            {data && data.error && (
              <ul>
                {Object.values(data.error).map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}
            <Form method='POST'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='form-control' id='name' defaultValue={user?.name} required />
              </div>
              <div className='form-group'>
                <label htmlFor='skills'>Skills</label>
                <input
                  type='text'
                  name='skills'
                  className='form-control'
                  id='skills'
                  defaultValue={user?.skills.join(',')}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='experience'>Experience</label>
                <input
                  type='text'
                  name='experience'
                  className='form-control'
                  id='experience'
                  defaultValue={user?.experience}
                  required
                />
              </div>
              <button disabled={isSubmitting} type='submit' className='btn btn-success'>
                {isSubmitting ? 'Submitting' : 'Submit'}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
