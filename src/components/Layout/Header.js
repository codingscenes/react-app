import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='ui three item menu'>
      <NavLink to='/products' className='item' activeClassName='active'>
        Products
      </NavLink>
      <NavLink to='/favorites' className='item' activeClassName='active'>
        Favorite
      </NavLink>
    </div>
  );
};

export default Header;
