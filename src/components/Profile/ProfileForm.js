const ProfileForm = () => {
  return (
    <section className='auth'>
      <form className='ui form'>
        <div className='field'>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' />
        </div>
        <div className='field'>
          <button className='ui button basic blue'>Change Password</button>
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;
