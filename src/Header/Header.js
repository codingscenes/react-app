import { Fragment } from 'react';
import bgChaiImage from '../assets/banner.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Chai Shop</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={bgChaiImage} alt='Chai Shop background' />
      </div>
    </Fragment>
  );
};

export default Header;
