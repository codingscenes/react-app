import { useRef } from 'react';

const UserForm = ({ user }) => {
  const nameRef = useRef('');
  const skillsRef = useRef('');
  const experienceRef = useRef('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', nameRef.current.value);
    console.log('Skills:', skillsRef.current.value);
    console.log('Experience:', experienceRef.current.value);
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='form-box'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' id='name' ref={nameRef} defaultValue={user.name} />
              </div>
              <div className='form-group'>
                <label htmlFor='skills'>Skills</label>
                <input
                  type='text'
                  className='form-control'
                  id='skills'
                  ref={skillsRef}
                  defaultValue={user.skills.join(',')}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='experience'>Experience</label>
                <input
                  type='text'
                  className='form-control'
                  id='experience'
                  ref={experienceRef}
                  defaultValue={user.experience}
                />
              </div>
              <button type='submit' className='btn btn-success'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
