const Header = () => {
  return (
    <nav className='navbar'>
      <ul className='nav nav-tabs'>
        <li>
          <a>Home</a>
        </li>
        <li className='active'>
          <a>Users</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
