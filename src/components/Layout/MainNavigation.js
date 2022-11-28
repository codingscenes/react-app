import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div className='ui inverted segment'>
      <div className='ui inverted secondary pointing menu'>
        <NavLink to='/'>
          <div className='header item'>React Auth</div>
        </NavLink>

        <NavLink className='item' activeClassName='active' to='/auth'>
          Login
        </NavLink>

        <NavLink className='item' activeClassName='active' to='/profile'>
          Profile
        </NavLink>

        <button className='ui item button  '>Logout</button>
      </div>
    </div>
  );
};

export default MainNavigation;
