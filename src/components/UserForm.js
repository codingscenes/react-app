import { Form } from 'react-router-dom';

const UserForm = ({ user }) => {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='form-box'>
            <Form method='POST'>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='form-control' id='name' defaultValue={user?.name} />
              </div>
              <div className='form-group'>
                <label htmlFor='skills'>Skills</label>
                <input
                  type='text'
                  name='skills'
                  className='form-control'
                  id='skills'
                  defaultValue={user?.skills.join(',')}
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
                />
              </div>
              <button type='submit' className='btn btn-success'>
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
