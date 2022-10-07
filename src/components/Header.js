import React from 'react';

const Header = ({ onThemeChanged, isDark }) => {
  return (
    <header className={`main-header ${isDark && 'main-header-black'}`}>
      <h3>TO DO APP</h3>
      <div className='form-check form-switch'>
        <input
          className={`form-check-input ${isDark && 'input-black'}`}
          type='checkbox'
          id='themeSwitch'
          name='darkMode'
          value='dark'
          onChange={onThemeChanged}
          checked={isDark}
        />
        <label className='form-check-label' htmlFor='themeSwitch'>
          Dark Mode
        </label>
      </div>
    </header>
  );
};

export default Header;
