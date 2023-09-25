const User = ({ data }) => {
  return (
    <div className='card m-1' style={{ width: 200 }}>
      <img src={data.profilePic} className='card-img-top' alt='...' />
      <div className='card-body mx-auto'>
        <h5 className='card-title'>{data.name}</h5>
      </div>
    </div>
  );
};
export default User;
