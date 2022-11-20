import { Fragment } from 'react';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
    </Fragment>
  );
}

export default App;
