import ProfileForm from './ProfileForm';

const UserProfile = () => {
  return (
    <section className='profile'>
      <h2 className='ui icon header'>
        <i className='user icon'></i>
        <div className='content'>
          <ProfileForm />
        </div>
      </h2>
    </section>
  );
};

export default UserProfile;
