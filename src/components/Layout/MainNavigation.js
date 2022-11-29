import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    //redirect user to homepage
    // or protect your routes
  };
  return (
    <div className='ui inverted segment'>
      <div className='ui inverted secondary pointing menu'>
        <NavLink to='/'>
          <div className='header item'>React Auth</div>
        </NavLink>

        {!isLoggedIn && (
          <NavLink className='item' activeClassName='active' to='/auth'>
            Login
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink className='item' activeClassName='active' to='/profile'>
            Profile
          </NavLink>
        )}

        {isLoggedIn && (
          <button onClick={logoutHandler} className='ui item button  '>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default MainNavigation;
