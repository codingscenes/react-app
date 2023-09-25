const NewUser = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card p-5'>
            <h2>Add new user!</h2>
            <div className='form-group'>
              <input type='text' className='form-control' placeholder='Enter user name' />
            </div>
            <button className='btn btn-dark mt-3'>ADD USER</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewUser;
