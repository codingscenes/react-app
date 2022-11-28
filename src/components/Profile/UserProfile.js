import ProfileForm from './ProfileForm';

const UserProfile = () => {
  return (
    <section className='profile'>
      <h2 class='ui icon header'>
        <i class='  user icon'></i>
        <div class='content'>
          <ProfileForm />
        </div>
      </h2>
    </section>
  );
};

export default UserProfile;
