import { Redirect, Route, Switch } from 'react-router-dom';
import FavoritePage from './pages/FavoritePage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {

  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>
      <Route path='/home'>
        <HomePage />
      </Route>
      <Route path='/products'>
        <ProductPage />
      </Route>

      <Route path='/favorites'>
        <FavoritePage />
      </Route>
    </Switch>
  );
}

export default App;
