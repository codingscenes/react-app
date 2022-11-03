import { Fragment } from 'react';
import teaImage from '../../assets/banner.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Chai Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={teaImage} alt='Tea banner' />
      </div>
    </Fragment>
  );
};

export default Header;
