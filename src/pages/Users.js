const dpUrl = 'https://api.dicebear.com/7.x/adventurer/';
const UsersPage = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <div className='card' style={{ width: 200 }}>
            <img src={`${dpUrl}svg?seed=Abby`} className='card-img-top' alt='...' />
            <div className='card-body mx-auto'>
              <h5 className='card-title'>Rohit Sharma</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsersPage;
