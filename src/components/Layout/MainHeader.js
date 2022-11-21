import CartButton from '../Cart/CartButton';

const MainHeader = (props) => {
  return (
    <header className='header'>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
