import React, { useContext } from 'react';

import ThemeContext from './../context/theme-context';

const Header = () => {
  const context = useContext(ThemeContext);
  return (
    <header className={`main-header ${context.isDark && 'main-header-black'}`}>
      <h3>TO DO APP</h3>
      <div className='form-check form-switch'>
        <input
          className={`form-check-input ${context.isDark && 'input-black'}`}
          type='checkbox'
          id='themeSwitch'
          name='darkMode'
          value='dark'
          onChange={context.onThemeChanged}
          checked={context.isDark}
        />
        <label className='form-check-label' htmlFor='themeSwitch'>
          Dark Mode
        </label>
      </div>
    </header>
  );
};

export default Header;
